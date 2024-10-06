import React, { useState, useEffect } from 'react';
import BinaryBackground from '../Home/BinaryBackground';
import { getWindowDimensions } from '../Home/Home';
import MeetingImage from '../../images/scrapbook-images/MinutesImage.webp';
import './minutes.css';
import { useTranslation } from 'react-i18next';

const Minutes: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = MeetingImage;
    preloadImage.onload = () => {
      setImageLoaded(true); // Set to true when the image has loaded
    };
  }, []);

  if (!imageLoaded) {
    return <div>Loading...</div>; // Optionally, you can return a loading spinner here
  }

  if(windowDimensions.height / windowDimensions.width >= 1){
    return (
      <div className='minutes-page-container' style={{height: `fit-content`}}>
        <BinaryBackground />
        <div className='minutes-list' style={{width: `100vw`, height: `92vh`}}>
          <div className='minutes-header' style={{marginBottom: `0.5em`}}>{t('Meeting Minutes')}</div>
          <div className='minutes-description' style={{marginBottom: `0.5em`}}>
            <p>{t('Minutes give you a snapshot of what was discussed during our weekly meetings.')}</p>
            <p>{t('You can access our minutes through the links below:')}</p>
          </div>
          <div className='minute-links'>
            <a href='https://drive.google.com/drive/u/2/folders/11-bCRH3T3_ONt1bp9S5c5sQ_Xh8kNjN3'>2023-24</a>
            <a href='https://drive.google.com/drive/u/1/folders/1Wr3UTq4kh9pEseFfk8hpMOwYWqX9DErt'>2021-22</a>
            <a href='https://drive.google.com/drive/folders/1Bbn_NNVZM16kkxMNMAi51HkJn7QumebX'>2020-21</a>
            <a href='/'>2019-20</a>
            <a href='https://drive.google.com/drive/u/2/folders/1KqXnjxT9VXXSdnW_efvrZA0dZoIUUyc-'>2018-19</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='minutes-page-container'>
      <BinaryBackground />
      <div className='minutes-list' style={{width: `50vw`}}>
        <div className='minutes-header'>{t('Meeting Minutes')}</div>
        <div className='minutes-description'>
          <p>{t('Minutes give you a snapshot of what was discussed during our weekly meetings.')}</p>
          <p>{t('You can access our minutes through the links below:')}</p>
        </div>
        <div className='minute-links'>
          <a href='https://drive.google.com/drive/u/2/folders/11-bCRH3T3_ONt1bp9S5c5sQ_Xh8kNjN3'>2023-24</a>
          <a href='https://drive.google.com/drive/u/1/folders/1Wr3UTq4kh9pEseFfk8hpMOwYWqX9DErt'>2021-22</a>
          <a href='https://drive.google.com/drive/folders/1Bbn_NNVZM16kkxMNMAi51HkJn7QumebX'>2020-21</a>
          <a href='/'>2019-20</a>
          <a href='https://drive.google.com/drive/u/2/folders/1KqXnjxT9VXXSdnW_efvrZA0dZoIUUyc-'>2018-19</a>
        </div>
      </div>
      <div className='minutes-image' style={{width: `50vw`}}>
        <img src={MeetingImage} alt='images of people in the office together'/>
      </div>
    </div>
  );
};

export default Minutes;
