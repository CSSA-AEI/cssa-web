import React, { useState } from 'react';
import './volunteer.css';
import BinaryBackground from '../Home/BinaryBackground';
import { getWindowDimensions } from '../../App';
import Ali from '../../images/ali.jpg';

interface VolunteerProps {
}

const Volunteer: React.FC<VolunteerProps> = () => {

  const [descriptionText, setDescriptionText] = useState(
    ["Hello computer science students! It's finally time:", "Guide applications for 2024 101 Week are now open!", "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!", "Check out some pictures from past 101 Weeks below."]
  );
  const [descriptionHeader, setDescriptionHeader] = useState('101 WEEK');

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  if(windowDimensions.width/windowDimensions.height <= 1){
    return(
      <div className="volunteer-body" style={{height: `fit-content`}}>
        <BinaryBackground />
        <div className='volunteer-events-container' style={{height: `fit-content`}}>
          <div className='volunteer-header'>VOLUNTEERING OPPORTUNITIES</div>
          <div className='volunteer-description'>
            <div className='description-header'>
              {descriptionHeader}
            </div>
            <div className='description-details'>
              {descriptionText.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className='volunteer-event' style={{width: `100%`, marginTop:`1em`}}>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform' style={{width: `75%`}}>
              <div className='volunteer-info' style={{width: `100%`}}>
                101 WEEK GUIDE APPLICATION
              </div>
            </a>
            <button onClick={() => {
              setDescriptionText(["Hello computer science students! It's finally time:", "Guide applications for 2024 101 Week are now open!", "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!", "Check out some pictures from past 101 Weeks below."])
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
              setDescriptionText(["Are you a freshman looking to get involved with CSSA events?", "Juniors work with members od the CSSA Exec team to plan events and ensure the smooth running of the association.","Apply to become a junior today!", "Meet some of our previous juniors below."])
              setDescriptionHeader('CSSA JUNIOR APPLICATION');
            }}>
              i
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="volunteer-body">
      <BinaryBackground />
      <div className='volunteer-events-container'>
        <div className='volunteer-header'>VOLUNTEERING OPPORTUNITIES</div>
        <div className='volunteer-event'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform'>
            <div className='volunteer-info'>
              101 WEEK GUIDE APPLICATION
            </div>
          </a>
          <button onClick={() => {
            setDescriptionText(["Hello computer science students! It's finally time:", "Guide applications for 2024 101 Week are now open!", "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!", "Check out some pictures from past 101 Weeks below."])
            setDescriptionHeader('101 WEEK');
          }}>
              i
          </button>
        </div>
        <div className='volunteer-event'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/viewform'>
            <div className='volunteer-info'>
              BECOME A CSSA JUNIOR
            </div>
          </a>
          <button onClick={() => {
            setDescriptionText(["Are you a freshman looking to get involved with CSSA events?", "Juniors work with members od the CSSA Exec team to plan events and ensure the smooth running of the association.","Apply to become a junior today!", "Meet some of our previous juniors below."])
            setDescriptionHeader('CSSA JUNIOR APPLICATION');
          }}>
            i
          </button>
        </div>
      </div>
      <div className='volunteer-description-container'>
        <div className='volunteer-description'>
          <div className='description-header'>
            {descriptionHeader}
          </div>
          <div className='description-details'>
            {descriptionText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className='volunteer-images-container'>
          <div className='volunteer-image'>
            <img src={Ali}/>
          </div>
          <div className='volunteer-image'>
            <img src={Ali}/>
          </div>
          <div className='volunteer-image'>
            <img src={Ali}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;