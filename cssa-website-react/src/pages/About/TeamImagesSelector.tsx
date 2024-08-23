import React, { useState, useEffect, useRef } from 'react';
import { execMapping, execImageMap } from '../../resources/execInfo';
import './team-images-selector.css';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const getImagePaths = () => {
  const imagePaths = [];
  for (let i = 1; i <= 12; i++) {
    var imageMap =  new Map();
    for (let j = 0; j < 10; j++) {
      imageMap.set(j, `/execs/${i}/${j}.jpg`);
    }
    imagePaths.push(imageMap)
  }
  
  return imagePaths;
};
interface TeamImagesSelectorProps {
  setSelectedExecMember: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TeamImagesSelector: React.FC<TeamImagesSelectorProps> = ({setSelectedExecMember}) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const memberSpotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageMapping = execImageMap;

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

        const threshold = rectW-50; // Threshold for determining if the mouse is directly above or below 
    
        const deltaX = mouseX - elementX;
        const deltaY = mouseY - elementY;
    
        if (Math.abs(deltaX) <= threshold && deltaY < -threshold) return 1; // directly above
        if (deltaX > threshold && deltaY < -threshold) return 2; // top-right quadrant
        if (Math.abs(deltaY) <= threshold && deltaX > threshold) return 3; // directly right
        if (deltaX > threshold && deltaY > threshold) return 4; // bottom-right quadrant
        if (Math.abs(deltaX) <= threshold && deltaY > threshold) return 5; // directly below
        if (deltaX < -threshold && deltaY > threshold) return 6; // bottom-left quadrant
        if (Math.abs(deltaY) <= threshold && deltaX < -threshold) return 7; // directly left
        if (deltaX < -threshold && deltaY < -threshold) return 8; // top-left quadrant
    
        return 0; // default color
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
        const backgroundImagePath = getQuadrantColor(mousePosition.x, mousePosition.y, elementPosition.x, elementPosition.y, elementPosition.width);
        var imageDisplay = imageMapping.at(index)?.get(backgroundImagePath);
  
        return (
            <div
            key={index}
            className="member-spot"
            >
            <div className="member-image-container" ref={ref} >
              <img id={`member-img-${index}`} src={imageDisplay} alt={`spot-${index}`} 
                onClick={(e) => { 
                  // e.currentTarget.src = imageMapping.at(index)?.get(9); console.log(imageMapping.at(index)?.get(9));
                  // setSelectedExecMember(execMapping.get(index+1));
                }}
              />
            </div>
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