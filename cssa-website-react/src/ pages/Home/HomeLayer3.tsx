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
import Group20 from '../../images/Group-20.png';

interface HomeLayer3Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer3: React.FC<HomeLayer3Props> = ({windowDimensions}) => {

    var displayOrientation = 'desktop'; 
    var screenRatio = windowDimensions.width / windowDimensions.height

    var renderExtra1 = false;

    if(windowDimensions.width / windowDimensions.height <= 1){
        displayOrientation = 'mobile';
        return(
            <div className='home-layer-3-container'>
                <div className='layer-3-title'>
                    <p>COME VISIT</p>
                    <p>SOME OF OUR</p>
                    <p>EVENTS</p>
                </div>
                <img src={BumpOff} alt='bump-off' id='bump-off' style={{ height: `30vh`}}/>
                <img src={WaterDunk} alt='water-dunk' id='water-dunk' style={{height: `40vh`}}/>
                <img src={BullRiding} alt='bull-riding' id='bull-riding' style={{height: `40vh`,  transform: `translate(80%, -5%)`}}/>
                <img src={Bowling} alt='bowling' id='bowling' style={{ height:`30vh`}}/>
                <div className='events-scroller' style={{top: `18%`, left: `0%`, height:`35vh`, width: `100vw`, boxSizing: `content-box`}}>
                    <div className='scroller' style={{padding: `0.5em 1em`, minWidth: `240vw`}}>
                        <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3} orientation={displayOrientation} link=''/>
                        <EventCard title='Pancake Breakfast' date='Jan 8th' description='Join us for some pancakes' image={Event1} orientation={displayOrientation} link=''/>
                        <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2} orientation={displayOrientation} link=''/>
                        <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1} orientation={displayOrientation} link=''/>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className='home-layer-3-container'>
            <div className='layer-3-title'>
                <p>COME VISIT</p>
                <p>SOME OF OUR</p>
                <p>EVENTS</p>
            </div>
            {
                screenRatio > 1.7 ? (<img src={Group20} alt='bump-off' id='group21' style={{height: `auto`, width: `100vw`}}/>) :
                (<img src={Group20} alt='bump-off' id='group21' style={{height: `70vh`, width: `auto`}}/>)
            }
            <div className='events-scroller'>
                <div className='scroller' style={{padding: `2em`}}>
                    <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3} orientation={displayOrientation} link=''/>
                    <EventCard title='Pancake Breakfast' date='Jan 8th' description='Join us for some pancakes' image={Event1} orientation={displayOrientation} link=''/>
                    <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2} orientation={displayOrientation} link=''/>
                    <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1} orientation={displayOrientation} link=''/>
                </div>
            </div>
        </div>
    )
}

export default HomeLayer3;