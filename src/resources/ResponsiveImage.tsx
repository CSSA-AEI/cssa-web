import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    width: number; // The desired width of the image
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width }) => {
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setAspectRatio(img.width / img.height);
        };
    }, [src]);

    return (
        <div
            style={{
                width: `${width}px`,
                height: aspectRatio ? `${width / aspectRatio}px` : 'auto',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    );
};

export default ResponsiveImage;
