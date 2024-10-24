import React, { useEffect, useState } from 'react';
import './about.css';
import TeamImagesSelector from './TeamImagesSelector';
import AboutWall from '../../images/scrapbook-images/aboutPageWall.webp';
import ExecTeam from '../../images/scrapbook-images/execTeam.jpg';
import BinaryEvents from '../Events/BinaryEvents';
import { teamInfo, TeamMember } from '../../resources/teamImagesInfo';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Carousel from './Carousel';
import { useTranslation } from 'react-i18next';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function getTeamMemberByName(name: string) {
  return teamInfo.find(member => member.name === name);
}

const About: React.FC = () => {

  const [selectedExecMember, setSelectedExecMember] = useState<string | undefined>('');
  const [execMemberObject, setExecMemberObject] = useState<TeamMember | undefined>(undefined);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (selectedExecMember) {
      const member = getTeamMemberByName(selectedExecMember);
      setExecMemberObject(member);
    }
  }, [selectedExecMember]);


  return (
        <div className='about-page-container'>
          <div className='cssa-info-container'>
            <div className='about-info-body'>
              <div className='about-blurb-container'>
                <div className='about-cssa-blurb'>
                  <p>{t('We, the Computer Science Student Association (CSSA) of the University of Ottawa, provide by this Constitution an organization dedicated to the pursuit of obtaining and managing resources for all members of the undergraduate Computer Science community at the University of Ottawa.')}</p>
                  <p>{t('We are also dedicated to providing social programming, academic services and employment resource opportunities to all our members. We are dedicated to fostering a sense of community among students, professors and members of the computer science department through these events and services.')}</p>
                  <p>{t('Take a look below to see the current members of our team.')}</p>
                </div>
                <a className='constitution-link' href='/constitution-english.pdf'>
                  {t('View our constitution in English here. We are working on the French translation for our constitution.')}
                </a>
              </div>
              <div className='exec-main-image'>
                <div className='exec-main-image-container'>
                  <div className='exec-main-image-polaroid'>
                    <img src={ExecTeam} alt="cssa-exec-team"/>
                  </div>
                  <a className='exec-office-hours' href='https://www.instagram.com/p/DABR82sx1Zo/?img_index=1'>
                    {t('Every exec has office hours. Click here to see when the execs will be in office.')}
                  </a>
                </div>
              </div>
            </div>
            <div className='about-wall-holder'>
              <img src={AboutWall} alt="cssa collage"/>
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
                            <div className='image-holder'><img src={execMemberObject?.frontImage} alt="selected exec headshot"/></div>
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
                            <img src={execMemberObject?.songImage} alt="selected exec's favorite song"/>
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
                              <a href={`mailto:${execMemberObject.personalEmail}`}>
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