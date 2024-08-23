import React, { useState } from 'react';
import BinaryBackground from '../Home/BinaryBackground';
import './minutes.css';

const Minutes: React.FC = () => {

  return (

    <div className='minutes-page-container'>
      <BinaryBackground />
      <div className='minutes-list'>
        <div className='minutes-header'>Meeting Minutes</div>
        <div className='minutes-description'>
          <p>Minutes give you a snapshot of what was discussed during our weekly meetings.</p>
          <p>You can access our minutes through the links below:</p>
        </div>
        <div className='minute-links'>
          <a href='https://drive.google.com/drive/u/2/folders/11-bCRH3T3_ONt1bp9S5c5sQ_Xh8kNjN3'>2023-24</a>
          <a href='https://drive.google.com/drive/u/1/folders/1Wr3UTq4kh9pEseFfk8hpMOwYWqX9DErt'>2021-22</a>
          <a href='https://drive.google.com/drive/folders/1Bbn_NNVZM16kkxMNMAi51HkJn7QumebX'>2020-21</a>
          <a href='/'>2019-20</a>
          <a href='https://drive.google.com/drive/u/2/folders/1KqXnjxT9VXXSdnW_efvrZA0dZoIUUyc-'>2018-19</a>
        </div>
      </div>
      <div className='minutes-image'>

      </div>
    </div>
  );
};

export default Minutes;
