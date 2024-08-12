import React, { useState } from 'react';
import './about.css';
import TeamImagesSelector from './TeamImagesSelector';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const aboutBlurb = {
    'english' : 
    `We, the Computer Science Student Association (CSSA) of the University of Ottawa, provide by this Constitution 
    an organization dedicated to the pursuit of obtaining and managing resources for all members of the undergraduate 
    Computer Science community at the University of Ottawa. We are also dedicated to providing social programming, 
    academic services and employment resource opportunities to all our members. We are dedicated to fostering a sense 
    of community among students, professors and members of the computer science department through these events and 
    services.`
}

const About: React.FC = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
        <div className='about-page-container'>
          <div style={{width: `50vw`, height: `92vh`}}>
            <TeamImagesSelector />
          </div>
          <div className='team-member-display-container'>
            <div className='team-member-display'>

            </div>
          </div>
          {/* <div className='about-page-blurb'>
            <div className='about-us'>About Us</div>
            <p>{aboutBlurb['english']}</p>
          </div> */}
        </div>
  );
};

export default About;