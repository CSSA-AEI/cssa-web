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

    const gotToSlide = (index : number) => {
        setCurrentIndex(index)
    };

}