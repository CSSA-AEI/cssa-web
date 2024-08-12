import React, { useState, useEffect, useRef } from 'react';
import './team-images-selector.css';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const TeamImagesSelector: React.FC = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const memberSpotRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const getQuadrantColor = (mouseX: number, mouseY: number, elementX: number, elementY: number, rectW: number) => {

        const threshold = rectW-10; // Threshold for determining if the mouse is directly above or below 
    
        const deltaX = mouseX - elementX;
        const deltaY = mouseY - elementY;
    
        if (Math.abs(deltaX) <= threshold && deltaY < -threshold) return 'purple'; // directly above
        if (Math.abs(deltaX) <= threshold && deltaY > threshold) return 'orange'; // directly below
        if (Math.abs(deltaY) <= threshold && deltaX < -threshold) return 'cyan'; // directly left
        if (Math.abs(deltaY) <= threshold && deltaX > threshold) return 'magenta'; // directly right
    
        if (deltaX < -threshold && deltaY < -threshold) return 'red'; // top-left quadrant
        if (deltaX > threshold && deltaY < -threshold) return 'green'; // top-right quadrant
        if (deltaX < -threshold && deltaY > threshold) return 'blue'; // bottom-left quadrant
        if (deltaX > threshold && deltaY > threshold) return 'yellow'; // bottom-right quadrant
    
        return 'white'; // default color
    };
    
  
    const memberSpots = Array.from({ length: 12 }).map((_, index) => {
        const ref = (el: HTMLDivElement) => {
            memberSpotRefs.current[index] = el;
        };
  
        const getElementPosition = () => {    
            if (memberSpotRefs.current[index]) {
                const rect = memberSpotRefs.current[index]!.getBoundingClientRect();

                return {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    width: rect.width,
                };
            }
            return { x: 0, y: 0 , width: 0};
        };
  
        const elementPosition = getElementPosition();
        const backgroundColor = getQuadrantColor(mousePosition.x, mousePosition.y, elementPosition.x, elementPosition.y, elementPosition.width);
  
        return (
            <div
            key={index}
            className="member-spot"
            >
            <div className="member-image-container" ref={ref} style={{ backgroundColor }}></div>
            </div>
        );
    });
  
    
    

    return (
            <div className='team-container'>
                <div className='team-body'>
                    {memberSpots}
                </div>
            </div>
    );
};

export default TeamImagesSelector;