import fs from "fs";
import path from 'path';

// Define the function to create a hashmap of images
export function findImagePaths(relativeDirectoryPath) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']; // Add more as needed

    const imagePaths = new Map();

    const absoluteDirectoryPath = path.join(__dirname, relativeDirectoryPath);

    try {
        const files = fs.readdirSync(absoluteDirectoryPath);

        files.forEach(file => {
        const filePath = path.join(absoluteDirectoryPath, file);
        const extname = path.extname(filePath);

        if (imageExtensions.includes(extname.toLowerCase())) {
            imagePaths.set(filePath.charAt(filePath.length-5), filePath);

        } else if (fs.lstatSync(filePath).isDirectory()) {
            //In the event that we perfrom more complex image routing, recursively visit subdirectories
            imagePaths.push(...findImagePaths(filePath));
        }
        });
    } catch (err) {
        console.error('Error finding image paths:', err);
    }

    return imagePaths;
};
