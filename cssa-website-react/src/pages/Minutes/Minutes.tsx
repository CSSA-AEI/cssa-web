import React, { useState, useEffect } from 'react';
import BinaryBackground from '../Home/BinaryBackground';
import { getWindowDimensions } from '../Home/Home';
import './minutes.css';
import { useTranslation } from 'react-i18next';

const minutesLinks = [
  { year: '2024-25', url: 'https://drive.google.com/drive/folders/1S9Vz0stl8XMlrsFFcbeZIIDEdGEq_2HO?usp=sharing' },
  { year: '2023-24', url: 'https://drive.google.com/drive/u/2/folders/11-bCRH3T3_ONt1bp9S5c5sQ_Xh8kNjN3' },
  { year: '2021-22', url: 'https://drive.google.com/drive/u/1/folders/1Wr3UTq4kh9pEseFfk8hpMOwYWqX9DErt' },
  { year: '2020-21', url: 'https://drive.google.com/drive/folders/1Bbn_NNVZM16kkxMNMAi51HkJn7QumebX' },
  { year: '2019-20', url: '/' },
  { year: '2018-19', url: 'https://drive.google.com/drive/u/2/folders/1KqXnjxT9VXXSdnW_efvrZA0dZoIUUyc-' },
];

const Minutes: React.FC = () => {
  const { t } = useTranslation();

  const renderLinks = () => (
    <div className="minute-links">
      {minutesLinks.map(({ year, url }) => (
        <a key={year} href={url}>{year}</a>
      ))}
    </div>
  );

  return (
    <div className={`minutes-page-container`}>
      <BinaryBackground />
      <div className="minutes-list">
        <div className="minutes-header">{t('Meeting Minutes')}</div>
        <div className="minutes-description">
          <p>{t('Minutes give you a snapshot of what was discussed during our weekly meetings.')}</p>
          <p>{t('You can access our minutes through the links below:')}</p>
        </div>
        {renderLinks()}
      </div>
        <div className="minutes-image">
          <img src="/images/MinutesPage/MinutesImage.webp" alt="Images of people in the office together" />
        </div>
    </div>
  );
};

export default Minutes;
