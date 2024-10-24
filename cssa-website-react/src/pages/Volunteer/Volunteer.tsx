import React, { useState, useEffect } from 'react';
import './volunteer.css';
import BinaryBackground from '../Home/BinaryBackground';
import { getWindowDimensions } from '../../App';
import VolunteerImage from '../../images/volunteer-images/volunteer-image.webp';
import { useTranslation } from 'react-i18next';

interface VolunteerProps {}

const Volunteer: React.FC<VolunteerProps> = () => {
  const [descriptionText, setDescriptionText] = useState([
    "Hello computer science students! It's finally time:",
    "Guide applications for 2024 101 Week are now open!",
    "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!",
    "Check out some pictures from past 101 Weeks below."
  ]);
  const [descriptionHeader, setDescriptionHeader] = useState('101 WEEK');
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  var windowDimensions = getWindowDimensions();

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = VolunteerImage;
    preloadImage.onload = () => {
      setImageLoaded(true); // Set to true when the image has loaded
    };
  }, []);

  if (!imageLoaded) {
    return <div>Loading...</div>; // Optionally, display a loading spinner or message
  }

  if(windowDimensions.width / windowDimensions.height <= 1){
    return(
      <div className="volunteer-body">
        <BinaryBackground />
        <div className='volunteer-events-container' style={{height: `fit-content`}}>
          <div className='volunteer-header'>{t('VOLUNTEERING OPPORTUNITIES')}</div>
          <div className='volunteer-description'>
            <div className='description-header'>{descriptionHeader}</div>
            <div className='description-details'>
              {descriptionText.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className='volunteer-event' style={{width: `100%`, marginTop: `1em`}}>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform' style={{width: `75%`}}>
              <div className='volunteer-info' style={{width: `100%`}}>
                {t('101 WEEK GUIDE APPLICATION')}
              </div>
            </a>
            <button onClick={() => {
              setDescriptionText([
                "Hello computer science students! It's finally time:",
                "Guide applications for 2024 101 Week are now open!",
                "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!",
                "Check out some pictures from past 101 Weeks below."
              ]);
              setDescriptionHeader('101 WEEK');
            }}>
              i
            </button>
          </div>
          <div className='volunteer-event' style={{width: `100%`}}>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform' style={{width: `75%`}}>
              <div className='volunteer-info' style={{width: `100%`}}>
                101 WEEK GUIDE APPLICATION
              </div>
            </a>
            <button onClick={() => {
              setDescriptionText([
                "Are you a freshman looking to get involved with CSSA events?",
                "Juniors work with members of the CSSA Exec team to plan events and ensure the smooth running of the association.",
                "Apply to become a junior today!"
              ]);
              setDescriptionHeader('CSSA JUNIOR APPLICATION');
            }}>
              i
            </button>
          </div>
        </div>
        <img src={VolunteerImage} alt='volunteering opportunities'/>
      </div>
    );
  }

  return (
    <div className="volunteer-body">
      <BinaryBackground />
      <div className='volunteer-events-container'>
        <div className='volunteer-header'>{t('VOLUNTEERING OPPORTUNITIES')}</div>
        <div className='volunteer-event'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform'>
            <div className='volunteer-info'>
              {t('101 WEEK GUIDE APPLICATION')}
            </div>
          </a>
          <button onClick={() => {
            setDescriptionText([
              "Hello computer science students! It's finally time:",
              "Guide applications for 2024 101 Week are now open!",
              "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!",
              "Check out some pictures from past 101 Weeks below."
            ]);
            setDescriptionHeader('101 WEEK');
          }}>
            i
          </button>
        </div>
        <div className='volunteer-event'>
          <a href='/volunteer'>
            <div className='volunteer-info'>
              {t('BECOME A CSSA JUNIOR')}
            </div>
          </a>
          <button onClick={() => {
            setDescriptionText([
              "Are you a freshman looking to get involved with CSSA events?",
              "Juniors work with members of the CSSA Exec team to plan events and ensure the smooth running of the association.",
              "Apply to become a junior today!"
            ]);
            setDescriptionHeader('CSSA JUNIOR APPLICATION');
          }}>
            i
          </button>
        </div>
      </div>
      <div className='volunteer-description-container'>
        <div className='volunteer-description'>
          <div className='description-header'>{t(descriptionHeader)}</div>
          <div className='description-details'>
            {descriptionText.map((text, index) => (
              <p key={index}>{t(text)}</p>
            ))}
          </div>
        </div>
        
      </div>
      <img src={VolunteerImage} alt='volunteering opportunities'/>
    </div>
  );
};

export default Volunteer;