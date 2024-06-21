import React, { useState } from 'react';
import './volunteer.css';
import BinaryBackground from '../Home/BinaryBackground';
import Ali from '../../images/ali.jpg';

interface VolunteerProps {
}

const Volunteer: React.FC<VolunteerProps> = () => {

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
          <button>i</button>
        </div>
      </div>
      <div className='volunteer-description-container'>
        <div className='volunteer-description'>
          <div className='description-header'>
            101 WEEK...
          </div>
          <div className='description-details'>
            <p>Hello computer science students! It's finally time:</p>
            <p>Guide applications for 2024 101 Week are now open!</p>
            <p>One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!</p>
            <p>Check out some pictures from past 101 Weeks below.</p>
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