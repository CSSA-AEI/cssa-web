import React, { useEffect, useState } from 'react';
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
            <div className='home-layer-1-container' style={{flexDirection: 'column'}}>
                <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
                <div className='layer-1-circle-container' style={{marginTop: '4em'}}>
                    <div className='circle' style={{height: `100vw`, width: `100vw`, maxHeight: `1200px`, maxWidth: `1200px`, transform: `translate(0%, 20%)`}}>
                        <div className='image1-container'>
                            <img style={{height: 'inherit', zIndex: '2', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -15%)'}} src={Connor} alt='event-poster'/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '1', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-55%, -12%)'}} src={Tim} alt='event-poster'/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '3', position: 'absolute', bottom: '0', transform: 'translateY(-27%)'}} src={CouchCarry} alt='event-poster'/>
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
            <div className='layer-1-circle-container' style={{ height: flexDirection === 'row' ? '92vh' : '' , justifyContent: `flex-end`, alignItems: `center`, display: `flex`, width: `50%`}}>
                <div className='circle' style={{height: `50vw`, width: `50vw`, position: `absolute`, right: `0%`, transform: 'translate(10%, 40%)'}}>
                </div>
                <div className='image1-container' style={{position: `absolute`, height: `50vw`, width: `50vw`, right: `0%`, transform: 'translate(30%, 60%)'}}>
                    <img style={{height: '50vw', zIndex: '2', position: 'relative', bottom: '0',transform: 'translate(10%, -50%)'}} src={Connor} alt='event-poster'/>
                    <img style={{height: '50vw', width: 'auto', zIndex: '1', position: 'relative', bottom: '0',transform: 'translate(-20%, -150%)'}} src={Tim} alt='event-poster'/>
                    <img style={{height: '50vw', width: 'auto', zIndex: '3', position: 'relative', bottom: '0', transform: 'translate(-20%, -225%)'}} src={CouchCarry} alt='event-poster'/>
                </div>
            </div>
        </div>
    )
};

export default HomeLayer1;