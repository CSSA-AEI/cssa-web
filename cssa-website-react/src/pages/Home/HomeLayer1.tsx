import React, { useState } from 'react';
import InformationLayer from './Information-Layer';
import Connor from '../../images/home-layer-1-images/Connor.webp';
import Tim from '../../images/home-layer-1-images/Tim.webp';
import CouchCarry from '../../images/home-layer-1-images/CouchCarry.webp';
import { getWindowDimensions } from '../../App';
import { useOrientation } from './HomeLayer4';
import BinaryBackground from './BinaryBackground';
import './home-layer-1.css';

interface HomeLayer1Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer1: React.FC<HomeLayer1Props> = ({ windowDimensions }) => {

    return(
        <div className='home-layer-1-container'>
            <BinaryBackground />
            <InformationLayer />
            <div className='layer-1-circle-container'>
                <div className='circle'>
                </div>
                <div className='image1-container'>
                    <img src={Connor} alt='event-poster'/>
                    <img src={Tim} alt='event-poster'/>
                    <img src={CouchCarry} alt='event-poster'/>
                </div>
            </div>
        </div>
    )
};

export default HomeLayer1;