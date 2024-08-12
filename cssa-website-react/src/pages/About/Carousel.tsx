import React, { useState } from 'react';
import './carousel.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button carousel-button-left">
        &lt;
      </button>
      <div className="carousel-slide">
        <div className='image-container'>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <div className='member-blurb'>
            <div className='member-name'>Angeleeca Jocson</div>
            <div className='member-position'>VP External Affairs</div>
            <div className='member-year-of-study'>3rd Year</div>
            <div className='member-program'>BSc. Computer Science and Math</div>
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-button carousel-button-right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

