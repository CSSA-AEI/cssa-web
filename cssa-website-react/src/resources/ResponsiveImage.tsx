import React, { useState, useEffect } from 'react';

const ResponsiveImage: React.FC<{ src: string; alt: string; width: number }> = ({ src, alt, width }) => {
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setAspectRatio(img.width / img.height);
        };
    }, [src]);

    return (
        <div style={{ width: `${width}px`, height: aspectRatio ? `${width / aspectRatio}px` : 'auto' }}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    );
};

export default ResponsiveImage;
