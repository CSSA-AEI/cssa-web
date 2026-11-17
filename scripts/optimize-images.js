const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const sourceRoot = path.resolve(__dirname, '../src');
const imageRoot = path.join(sourceRoot, 'images');
const supportedFormats = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.avif']);
const defaultBudget = 200 * 1024;
const lookAroundBudget = 50 * 1024;
const qualities = [82, 72, 62, 52, 42];
const dimensions = [2400, 1800, 1400, 1100, 900, 720, 600];
const dryRun = process.argv.includes('--dry-run');

async function findFiles(directory, includeFile) {
  let entries;

  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }

  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? findFiles(entryPath, includeFile)
        : includeFile(entryPath)
          ? [entryPath]
          : [];
    }),
  );

  return nestedFiles.flat();
}

function getBudget(filePath) {
  return /(^|[\\/])lookaround([\\/]|$)/i.test(filePath)
    ? lookAroundBudget
    : defaultBudget;
}

async function encodeWebp(inputPath, temporaryPath, quality, maxDimension, lossless = false) {
  await fs.rm(temporaryPath, { force: true });

  let image = sharp(inputPath).rotate();
  if (maxDimension) {
    image = image.resize({
      width: maxDimension,
      height: maxDimension,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  await image.webp({ quality, effort: 6, lossless }).toFile(temporaryPath);
  return (await fs.stat(temporaryPath)).size;
}

async function updateSourceReferences(originalPath, webpPath, sourceFiles) {
  let updatedFiles = 0;

  for (const sourceFile of sourceFiles) {
    const originalReference = path.relative(path.dirname(sourceFile), originalPath).split(path.sep).join('/');
    const webpReference = path.relative(path.dirname(sourceFile), webpPath).split(path.sep).join('/');
    const contents = await fs.readFile(sourceFile, 'utf8');

    if (contents.includes(originalReference)) {
      await fs.writeFile(sourceFile, contents.split(originalReference).join(webpReference));
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

async function optimizeImage(filePath, sourceFiles) {
  const extension = path.extname(filePath).toLowerCase();
  const isWebp = extension === '.webp';
  const budget = getBudget(filePath);
  const originalSize = (await fs.stat(filePath)).size;

  if (isWebp && originalSize <= budget) {
    return { savedBytes: 0, converted: false };
  }

  const webpPath = isWebp
    ? path.join(path.dirname(filePath), `${path.basename(filePath, extension)}.optimized.webp`)
    : path.join(path.dirname(filePath), `${path.basename(filePath, extension)}.webp`);

  if (webpPath !== filePath) {
    try {
      await fs.access(webpPath);
      console.warn(`Skipped ${filePath} because ${webpPath} already exists`);
      return { savedBytes: 0, converted: false };
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  const temporaryPath = path.join(
    path.dirname(webpPath),
    `.${path.basename(webpPath, '.webp')}.tmp-${process.pid}.webp`,
  );

  try {
    let optimizedSize = Infinity;

    if (extension === '.png') {
      optimizedSize = await encodeWebp(filePath, temporaryPath, 100, null, true);
      if (optimizedSize <= budget) {
        return await saveResult(filePath, webpPath, temporaryPath, originalSize, optimizedSize, sourceFiles, isWebp);
      }
    }

    const metadata = await sharp(filePath).metadata();
    const maxSourceDimension = Math.max(metadata.width || 0, metadata.height || 0);
    const resizeSteps = dimensions.filter((dimension) => dimension < maxSourceDimension);
    const attempts = [null, ...resizeSteps];

    for (const maxDimension of attempts) {
      for (const quality of qualities) {
        optimizedSize = await encodeWebp(filePath, temporaryPath, quality, maxDimension);
        if (optimizedSize <= budget) {
          return await saveResult(filePath, webpPath, temporaryPath, originalSize, optimizedSize, sourceFiles, isWebp);
        }
      }
    }

    if (optimizedSize < originalSize) {
      return await saveResult(filePath, webpPath, temporaryPath, originalSize, optimizedSize, sourceFiles, isWebp);
    }

    console.warn(`Could not reduce ${filePath} below ${Math.round(budget / 1024)} KB without increasing its size`);
    return { savedBytes: 0, converted: false };
  } finally {
    await fs.rm(temporaryPath, { force: true });
  }
}

async function saveResult(originalPath, webpPath, temporaryPath, originalSize, optimizedSize, sourceFiles, isWebp) {
  const savedBytes = Math.max(0, originalSize - optimizedSize);

  if (optimizedSize >= originalSize) {
    console.warn(`Skipped ${originalPath} because the WebP output would not be smaller`);
    return { savedBytes: 0, converted: false };
  }

  if (dryRun) {
    console.log(`Would optimize ${originalPath} (${originalSize} -> ${optimizedSize} bytes)`);
    return { savedBytes, converted: !isWebp };
  }

  await fs.rename(temporaryPath, webpPath);
  const updatedFiles = await updateSourceReferences(originalPath, webpPath, sourceFiles);
  console.log(
    `Optimized ${originalPath} (${originalSize} -> ${optimizedSize} bytes)` +
      (updatedFiles ? `; updated ${updatedFiles} source file(s)` : ''),
  );
  return { savedBytes, converted: !isWebp };
}

async function main() {
  const imagePaths = await findFiles(imageRoot, (filePath) =>
    supportedFormats.has(path.extname(filePath).toLowerCase()),
  );
  const sourceFiles = await findFiles(sourceRoot, (filePath) =>
    path.extname(filePath).match(/^\.(css|js|jsx|json|ts|tsx)$/i) && !filePath.startsWith(`${imageRoot}${path.sep}`),
  );
  let savedBytes = 0;
  let converted = 0;

  for (const imagePath of imagePaths) {
    const result = await optimizeImage(imagePath, sourceFiles);
    savedBytes += result.savedBytes;
    converted += Number(result.converted);
  }

  console.log(
    `${dryRun ? 'Potential' : 'Total'} savings: ${(savedBytes / 1024).toFixed(1)} KB; ${converted} image(s) converted to WebP.`,
  );
}

main().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exitCode = 1;
});