import React, {useState} from 'react';
import InformationLayer from './Information-Layer';
import Connor from '../../images/Connor.png';
import Tim from '../../images/Tim.png';
import CouchCarry from '../../images/CouchCarry.png';
import { getWindowDimensions } from '../../App';
import './home-layer-1.css';

interface HomeLayer1Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer1: React.FC<HomeLayer1Props> = ({ windowDimensions }) => {

    var flexDirection = 'row';
    var screenDimensions = getWindowDimensions();
    var desiredHeight = 0;

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

    if(windowDimensions.width / windowDimensions.height <= 1){
        flexDirection = 'column'
        return(
            <div className='home-layer-1-container' style={{flexDirection: 'column'}}>
                <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
                <div className='layer-1-circle-container' style={{marginTop: '4em'}}>
                    <div className='circle' style={{height: `100vw`, width: `100vw`, maxHeight: `1200px`, maxWidth: `1200px`, transform: `translate(0%, 20%)`}}>
                        <div className='image1-container'>
                            <img style={{height: 'inherit', zIndex: '2', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -15%)'}} src={Connor}/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '1', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-55%, -12%)'}} src={Tim}/>
                            <img style={{height: 'auto', width: '100vw', zIndex: '3', position: 'absolute', bottom: '0', transform: 'translateY(-27%)'}} src={CouchCarry}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='home-layer-1-container' style={{flexDirection: 'row', }}>
            <InformationLayer windowSize={windowDimensions} flexDirection={flexDirection}/>
            <div className='layer-1-circle-container' style={{ height: flexDirection === 'row' ? '92vh' : '' , justifyContent: `flex-end`, alignItems: `center`, display: `flex`}}>
                <div className='circle' style={{height: `45vw`, width: `45vw`, transform: `translate(10%, ${desiredHeight}%)`}}>
                    <div className='image1-container'>
                        <img style={{height: 'inherit', zIndex: '2', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -15%)'}} src={Connor}/>
                        <img style={{height: 'auto', width: '45vw', zIndex: '1', position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, -12%)'}} src={Tim}/>
                        <img style={{height: 'auto', width: '45vw', zIndex: '3', position: 'absolute', bottom: '0', transform: 'translateY(-10%)'}} src={CouchCarry}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeLayer1;