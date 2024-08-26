import React, { useState } from 'react';
import InformationLayer from './Information-Layer';
import Connor from '../../images/home-layer-1-images/Connor.png';
import Tim from '../../images/home-layer-1-images/Tim.png';
import CouchCarry from '../../images/home-layer-1-images/CouchCarry.png';
import { getWindowDimensions } from '../../App';
import { useOrientation } from './HomeLayer4';
import BinaryBackground from './BinaryBackground';
import './home-layer-1.css';

interface HomeLayer1Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer1: React.FC<HomeLayer1Props> = ({ windowDimensions }) => {

    var flexDirection = 'row';
    const [screenDimensions, setScreenDimensions] = useState(getWindowDimensions());
    var desiredHeight = 0;
    const orientation = useOrientation();

    if(screenDimensions.width <= 768){
        desiredHeight = 60;
    }
    else if (screenDimensions.width <= 1439){
        desiredHeight = 40;
    }
    else if (screenDimensions.width >= 2000 && screenDimensions.height > 2000){
        desiredHeight = 50;
    }
    else if (screenDimensions.width >= 1440 && screenDimensions.height > 950){
        desiredHeight = 45;
    }
    else{
        desiredHeight = 35;
    }

    //The below part of the code is for the display when we have a porttrait screen, i.e phones and tablets

    if(orientation === 'portrait'){
        flexDirection = 'column'
        return(
            <div className='home-layer-1-container'>
                <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
                <div className='layer-1-circle-container'>
                    <div className='circle'>
                        <div className='image1-container'>
                            <img  src={Connor} alt='event-poster'/>
                            <img  src={Tim} alt='event-poster'/>
                            <img  src={CouchCarry} alt='event-poster'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='home-layer-1-container' style={{flexDirection: 'row', }}>
            <BinaryBackground />
            <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
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