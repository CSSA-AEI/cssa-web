import React, {useState} from 'react';
import './home-layer-3.css';
import BumpOff from '../../images/bump_off.png';
import WaterDunk from '../../images/water_dunk.png';
import BullRiding from '../../images/bull_riding.png';
import Bowling from '../../images/bowling.png';
import EventCard from './EventCard';
import Event1 from '../../images/event1.png';
import Event2 from '../../images/webdevevent.png';
import Event3 from '../../images/halloween_event.png';
import Event4 from '../../images/pancakevent.png';
import CouchCarry2023 from '../../images/couchCarry2023.png';

interface HomeLayer3Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer3: React.FC<HomeLayer3Props> = ({windowDimensions}) => {

    var translationDistance = {x: 0, y: 0}; 

    var renderExtra1 = false;

    if(windowDimensions.width / windowDimensions.height > 1.6){
        renderExtra1 = true
    }

    return(
        <div className='home-layer-3-container'>
            <div className='top-layer-banner'></div>
            <div className='layer-3-title'>
                <p>COME VISIT</p>
                <p>SOME OF OUR</p>
                <p>EVENTS</p>
            </div>
            <img src={BumpOff} alt='bump-off' id='bump-off'/>
            <img src={WaterDunk} alt='water-dunk' id='water-dunk'/>
            <img src={BullRiding} alt='bull-riding' id='bull-riding'/>
            <img src={Bowling} alt='bowling' id='bowling'/>
            <img src={CouchCarry2023} alt='justin' id='justin'/>
            {/* {
                (<img src={CouchCarry2023} alt='justin' id='justin'/>) 
            } */}
            <div className='events-scroller'>
                <div className='scroller'>
                    <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3}/>
                    <EventCard title='Pancake Breakfast' date='Jan 8th' description='Join us for some pancakes' image={Event4}/>
                    <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2}/>
                    <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1}/>
                </div>
            </div>
            {/* <div className='event-nav-circle'>
            </div> */}

        </div>
    )
}

export default HomeLayer3;