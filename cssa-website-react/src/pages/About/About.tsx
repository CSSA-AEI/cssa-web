import React, { useState } from 'react';
import './about.css';
import TeamImagesSelector from './TeamImagesSelector';
import logo from '../../images/home-layer-1-images/cssalogo.png';
import BinaryEvents from '../Events/BinaryEvents';

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
  const [selectedExecMember, setSelectedExecMember] = useState<string | undefined>('');
  console.log(selectedExecMember)

  return (
        <div className='about-page-container'>
          <div className='cssa-info-container'>

            <div className='about-blurb-container'>
              <div className='info-layer-logo-container'>
                <img className='info-layer-logo' src={logo} alt="The CSSA Logo" style={{ width: `100%`, height: 'auto' }}/>
              </div>
              <div className='about-cssa-blurb'>
                We, the Computer Science Student Association (CSSA) of the University of Ottawa, provide by this Constitution 
                an organization dedicated to the pursuit of obtaining and managing resources for all members of the undergraduate 
                Computer Science community at the University of Ottawa.
              </div>
            </div>
          </div>
          <div className='team-title'>
            MEET OUR 2024-25 TEAM
          </div>
          <div className='team-info-container' style={{width: `100vw`, height: `92vh`, boxSizing: `border-box`, overflow: `hidden`, display: `flex`}}>
            <TeamImagesSelector setSelectedExecMember={setSelectedExecMember}/>
            <div className='team-member-display-container' style={{flex: 1}}>
              <div className='team-member-display'>
                {
                  selectedExecMember ? (
                    <div className='team-member-body'>
                      <div className='member-name'>{selectedExecMember}</div>
                      <div className='exec-content'>
                        <div className='exec-socials'></div>
                        <div className='exec-intro-blurb'>Hand</div>
                      </div>
                    </div>
                  )  : (
                    <div className='team-member-body'>
                      
                    </div>
                  )
                }
              </div>
            </div>
            <BinaryEvents />
          </div>
        </div>
  );
};

export default About;