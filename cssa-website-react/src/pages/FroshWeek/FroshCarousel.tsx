import React, { useState } from "react";
import './frosh-carousel.css'

interface FroshCarouselProps {
    images: string[];
}

export default function FroshCarousel({ images }: FroshCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length == 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index : number) => {
        setCurrentIndex(index)
    };



    return (
        <div className="frosh-week-carousel-container">
            {/* Left Arrow */}
            <button className="frosh-week-carousel-arrow frosh-week-carousel-left-arrow" onClick={prevSlide}>
                &#10094;
            </button>

            {/* Image */}
            <div className="frosh-week-carousel-image-container">
                <img src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                    className="frosh-week-carousel-image" 
                />
            </div>

            {/* Right Arrow */}
            <button className="frosh-week-carousel-arrow frosh-week-carousel-right-arrow" onClick={nextSlide}>
                &#10095;
            </button>

            {/* Dots */}
            <div className="frosh-week-carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`frosh-week-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
