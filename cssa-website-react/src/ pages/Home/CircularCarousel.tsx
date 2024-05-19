import React, { useRef, useState, useEffect} from "react";
import './circular-carousel.css';
import RachelQ from '../../images/rachelqi.jpg';
import RachelO from '../../images/rachelo.jpg';
import Angie from '../../images/angie.jpg';
import Tim from '../../images/Tim.png';
import Connor from '../../images/Connor.png';
import Tara from '../../images/tara.jpg';

const images = [
    RachelQ,
    RachelO,
    Angie,
    Tim,
    Connor,
    Tara,
    Angie,
    RachelO
];
  
const initialSlidesState = images.map((slide, index) => ({
    coords: {
      x: 0,
      y: 0
    },
    theta: 0,
    index: index + 1,
    image: slide
}));
  
const numSlides = images.length;
const angle = 360 / numSlides;



const CircularCarousel: React.FC = () => {

    const wheelRef = useRef<any>(null);

    const [slides, setSlides] = useState(initialSlidesState);
    const [activeSlide, setActiveSlide] = useState(slides[0]);
    const [wheelWidth, setWheelWidth] = useState(0);
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [rotate, setRotate] = useState(0);

    const getInitialPositions = () => {
        const center = {
          x: parseFloat(getComputedStyle(wheelRef.current.parentNode).width) / 2 - parseFloat(getComputedStyle(wheelRef.current).width) /2,
          y: parseFloat(getComputedStyle(wheelRef.current.parentNode).height) / 2 - parseFloat(getComputedStyle(wheelRef.current).height) /2
        };
        setCenter(center);
        setWheelWidth(parseFloat(getComputedStyle(wheelRef.current.parentNode).width));
    };

    useEffect(() => {
        if (!wheelRef.current) {
          return;
        }
        getInitialPositions();
        window.addEventListener("resize", getInitialPositions);
        return () => window.removeEventListener("resize", getInitialPositions);
    }, []);
    
    useEffect(() => {
        if (!wheelWidth) {
          return;
        }
    
        let positionedSlides = slides.map((slide, index) => {
            
            // Calculate angle increment based on total slides,
            //we're doing this in radians for simplification
            const angleIncrement = (2 * Math.PI) / slides.length;
            const newTheta = angleIncrement * index; // Calculate angle for current slide

            const wheelRadius = wheelWidth / 2;
            var y = -wheelRadius * Math.cos(newTheta); // Calculate x-coordinatewheel
            var x = -wheelRadius * Math.sin(newTheta); // Calculate y-coordinate 

            return {
                ...slide,
                coords: { x: y, y: x }
            };
        });
    
        setSlides(positionedSlides);
    }, [wheelWidth]);
    
    const handleSlideClick = (e: any) => {
        const nextIndex = parseFloat(e.currentTarget.dataset.index);
        const currentIndex = activeSlide.index;
    
        setActiveSlide(slides[nextIndex - 1]);

        console.log(slides[nextIndex - 1])
    
        let numOfRotations = nextIndex - currentIndex;
    
        if (numOfRotations < -numSlides / 2) {
          numOfRotations = numOfRotations + numSlides;
        }
    
        if (numOfRotations > numSlides / 2) {
          numOfRotations = numOfRotations - numSlides;
        }
    
        setRotate((prevRotate) => prevRotate + angle * numOfRotations);
    };

    return (
      <div className="container" style={{width: `100vw`, height: `60vw`, overflow: `hidden`, marginTop:'5em'}}>
        <div
          className="wheel"
          style={{
            transform: `translate(0%, 30%) rotate(${rotate}deg)`,
            backgroundColor: `red`,
            width: `100vw`,
            height: `100vw`,
            borderRadius: `50%`
          }}
        >
          {slides &&
          slides.map((slide, index) => {
            return (
              <div
                onClick={(e) => {handleSlideClick(e);}}
                key={index}
                ref={wheelRef}
                className={`slide ${slide.index === activeSlide.index ? 'active' : ''}`}
                data-index={index + 1}
                style={{
                  top: center.x + slide.coords.x,
                  left: center.y + slide.coords.y,
                  transform: `translate(0%, 0%) rotate(${-rotate}deg)`
                }}
              >
                <img src={slide.image} alt='cssa member'/>
              </div>
            );
          })}
        </div>
  
      </div>
    );
};
  
export default CircularCarousel;