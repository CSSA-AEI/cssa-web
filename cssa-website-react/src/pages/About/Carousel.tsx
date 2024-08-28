import React, { useState } from 'react';
import './carousel.css';

interface CarouselProps {
  questions: string[][];
}

const Carousel: React.FC<CarouselProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? questions.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <p>Q: {questions[currentIndex][0]}</p>
        <p>A: {questions[currentIndex][1]}</p>
      </div>
      <div className='movement-buttons'>
        <button onClick={prevSlide} className="carousel-button carousel-button-left">
          &lt;
        </button>
        <button onClick={nextSlide} className="carousel-button carousel-button-right">
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;

