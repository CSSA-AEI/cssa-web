import React, { useState } from 'react';
import './about.css';
import RachelQ from '../../images/rachelqi.jpg';
import RachelO from '../../images/rachelo.jpg';
import Angie2 from '../../images/angie2.png';
import Tim from '../../images/Tim.png';
import Connor from '../../images/Connor.png';
import Tara from '../../images/tara.jpg';
import Ali from '../../images/ali.jpg';
import Carousel from './Carousel';
import TeamPhoto from '../../images/TeamPhoto.jpg';

const images = [
    RachelQ,
    RachelO,
    Angie2,
    Tim,
    Connor,
    // Tara,
    Angie2,
    Ali, 
    RachelO,
    RachelQ,
    Ali,
    Angie2,
];

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
            <div className='exec-team-image-container'>
                <img src={TeamPhoto}/>
            </div>
            <div className='about-page-blurb'>
                {aboutBlurb['english']}
                <p>View our constitution in English here.</p>
            </div>
            <div className='members-header'>Executive Team 2024-25</div>
            <div className='members-container'>
                <div className='member-info'>
                    <Carousel images={images}/>
                </div>
            </div>
            
        </div>
  );
};

export default About;
