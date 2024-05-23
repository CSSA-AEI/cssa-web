import React, {useState} from 'react';
import './home-layer-3.css';
import BumpOff from '../../images/bump_off.png';
import WaterDunk from '../../images/water_dunk.png';
import BullRiding from '../../images/bull_riding.png';
import Bowling from '../../images/bowling.png';
import Justin from '../../images/justin.png';

interface HomeLayer3Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer3: React.FC<HomeLayer3Props> = ({windowDimensions}) => {

    var translationDistance = {x: 0, y: 0}; 

    var renderExtra1 = false;

    if(windowDimensions.width / windowDimensions.height > 1.4){
        renderExtra1 = true
    }

    return(
        <div className='home-layer-3-container'>
            <div className='layer-3-title'>
                <p>COME VISIT</p>
                <p>SOME OF OUR</p>
                <p>EVENTS</p>
            </div>
            <img src={BumpOff} alt='bump-off' id='bump-off'/>
            <img src={WaterDunk} alt='water-dunk' id='water-dunk'/>
            <img src={BullRiding} alt='bull-riding' id='bull-riding'/>
            <img src={Bowling} alt='bowling' id='bowling'/>
            {
                renderExtra1 && (<img src={Justin} alt='justin' id='justin'/>) 
            }
            <div className='event-nav-circle'>
            </div>
        </div>
    )
}

export default HomeLayer3;