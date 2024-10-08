import React, { useRef, useState, useEffect} from "react";
import './circular-carousel.css';

interface CircularCarouselProps {
  flexDirection: string;
  getCurrentMember: (value:  any) => void;
  images: any[];
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({flexDirection, getCurrentMember, images}) => {

    const wheelRef = useRef<any>(null);
    const initialSlidesState = images.map((slide, index) => ({
        coords: {
          x: 0,
          y: 0
        },
        theta: 0,
        index: index + 1,
        image: slide.frontImage,
        name: slide.name,
        blurb: slide.blurb,
        position: slide.position,
        year: slide.year
    }));

    const numSlides = images.length;
    const angle = 360 / numSlides;

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
            var newTheta = angleIncrement * index;

            //This is done so the middle one is highlighted and not the top one
            if(flexDirection === 'row'){
              newTheta = angleIncrement * (index - 1);
            }
            // Calculate angle for current slide

            const wheelRadius = wheelWidth / 2;
            var y = -wheelRadius * Math.cos(newTheta); // Calculate x-coordinatewheel
            var x = -wheelRadius * Math.sin(newTheta); // Calculate y-coordinate 

            return {
                ...slide,
                coords: { x: y, y: x }
            };
        });
    
        setSlides(positionedSlides);
    }, [wheelWidth, flexDirection]);
    
    const handleSlideClick = (e: any) => {
        const nextIndex = parseFloat(e.currentTarget.dataset.index);
        const currentIndex = activeSlide.index;
    
        setActiveSlide(slides[nextIndex - 1]);
        getCurrentMember(slides[nextIndex - 1])
    
        let numOfRotations = nextIndex - currentIndex;
    
        if (numOfRotations < -numSlides / 2) {
          numOfRotations = numOfRotations + numSlides;
        }
    
        if (numOfRotations > numSlides / 2) {
          numOfRotations = numOfRotations - numSlides;
        }
    
        setRotate((prevRotate) => prevRotate + angle * numOfRotations);
    };

    if(flexDirection === 'column'){
      return (
        <div className="container">
          <div className="wheel" style={{ transform: `translate(0%, 20%) rotate(${rotate}deg)`}}>
            <div className="wheel-border" style={{transform: `translate(0%, 30%) rotate(${rotate}deg)`}}></div>
            {slides &&
            slides.map((slide, index) => {
              return (
                <div
                  onClick={(e) => {handleSlideClick(e);}}
                  key={index}
                  ref={wheelRef}
                  className={`slide ${slide.index === activeSlide.index ? 'active-mobile' : ''}`}
                  data-index={index + 1}
                  style={{
                    top: center.x + slide.coords.x,
                    left: center.y + slide.coords.y,
                    transform: `rotate(${-rotate}deg)`
                  }}
                >
                  <img src={slide.image} alt='cssa member'/>
                </div>
              );
            })}
          </div>
    
        </div>
      );
    }

    return (
      <div className="container">
        <div className="wheel" style={{ transform: `translate(-45%, 10%) rotate(${rotate}deg)`}}>
          <div className="wheel-border" style={{transform: `rotate(${rotate}deg)`}}></div>
          {slides &&
          slides.map((slide, index) => {
            return (
              <div
                onClick={(e) => {handleSlideClick(e);}}
                key={index}
                ref={wheelRef}
                className={`slide ${slide.index === activeSlide.index ? 'active-landscape' : ''}`}
                data-index={index + 1}
                style={{
                  top: center.x + slide.coords.x,
                  left: center.y + slide.coords.y,
                  transform: `translate(0%, 0%) rotate(${-rotate}deg)`,
                  height: `8vw`,
                  width: `8vw`
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