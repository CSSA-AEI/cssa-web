import React, { useEffect, useState } from 'react';
import './about.css';
import TeamImagesSelector from './TeamImagesSelector';
import logo from '../../images/home-layer-1-images/cssalogo.webp';
import BinaryEvents from '../Events/BinaryEvents';
import { teamInfo, TeamMember } from '../../resources/teamImagesInfo';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Carousel from './Carousel';

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

function getTeamMemberByName(name: string) {
  return teamInfo.find(member => member.name === name);
}

const About: React.FC = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [selectedExecMember, setSelectedExecMember] = useState<string | undefined>('');
  const [execMemberObject, setExecMemberObject] = useState<TeamMember | undefined>(undefined);
  
  useEffect(() => {
    if (selectedExecMember) {
      const member = getTeamMemberByName(selectedExecMember);
      setExecMemberObject(member);
    }
  }, [selectedExecMember]);


  return (
        <div className='about-page-container'>
          <div className='cssa-info-container'>

            <div className='about-blurb-container'>
              {/* <div className='info-layer-logo-container'>
                <img className='info-layer-logo' src={logo} alt="The CSSA Logo" style={{ width: `100%`, height: 'auto' }}/>
              </div> */}
              <div className='about-cssa-blurb'>
                <p>We, the Computer Science Student Association (CSSA) of the University of Ottawa, provide by this Constitution 
                an organization dedicated to the pursuit of obtaining and managing resources for all members of the undergraduate 
                Computer Science community at the University of Ottawa.</p>
                <p>
                We are also dedicated to providing social programming, academic services and employment resource opportunities to all our members. 
                We are dedicated to fostering a sense of community among students, professors and members of the computer science department through these events and services.
                </p>
                <p>
                View our constitution in English <a href='/'>here.</a> We are working on the French translation for our constitution.
                </p>
                <p>Take a look below to see the current members of our team.</p>
              </div>
            </div>
          </div>
          <div className='team-title'>
            MEET OUR 2024-25 TEAM
          </div>
          <div className='team-info-container'>
            <TeamImagesSelector setSelectedExecMember={setSelectedExecMember}/>
            <div className='team-member-display-container'>
              <div className='team-member-display'>
                {
                  selectedExecMember ? (
                    <div className='team-member-body'>
                      <div className='member-name'>{selectedExecMember}</div>
                      <div className='exec-content'>
                        <div className='exec-member-info'>
                          <div className='exec-image-container'>
                            <div className='image-holder'><img src={execMemberObject?.frontImage}/></div>
                          </div>
                          <div className='exec-contact-info'>
                            <p>{execMemberObject?.year}</p>
                            <p>Position: {execMemberObject?.position}</p>
                            <p>Email address: {execMemberObject?.email || 'Email not available'}</p>
                          </div>
                        </div>
                        <div className='exec-intro-blurb'>
                          <div className='exec-about-info'>
                            <Carousel questions={execMemberObject?.questions || [[]]}/>
                          </div>
                          <a className='music-button' href={execMemberObject?.songLink}>
                            <img src={execMemberObject?.songImage} />
                            <p>{execMemberObject?.song}</p>
                          </a>
                          <div className='exec-social'>
                            {execMemberObject?.instagram && (
                              <a href={execMemberObject.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                              </a>
                            )}
                            {execMemberObject?.linkedIn && (
                              <a href={execMemberObject.linkedIn} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                              </a>
                            )}
                            {execMemberObject?.personalEmail && (
                              <a href={`/mailto:${execMemberObject.personalEmail}`}>
                                <FaEnvelope />
                              </a>
                            )}
                          </div>
                        </div>
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