import React from 'react';
import './home-layer-3.css';
import BumpOff from '../../images/scrapbook-images/bump_off.png';
import WaterDunk from '../../images/scrapbook-images/water_dunk.png';
import BullRiding from '../../images/scrapbook-images/bull_riding.png';
import Bowling from '../../images/scrapbook-images/bowling.png';
import EventCard from './EventCard';
import Event1 from '../../images/events-posters/CienaNetworking.webp';
import Event2 from '../../images/events-posters/webdevevent.webp';
import Event3 from '../../images/events-posters/halloween_event.webp';
import Group20 from '../../images/scrapbook-images/Group-20.png';
import BinaryBackground from './BinaryBackground';
import { useTranslation } from 'react-i18next';

interface HomeLayer3Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer3: React.FC<HomeLayer3Props> = ({windowDimensions}) => {

    var displayOrientation = 'desktop'; 
    var screenRatio = windowDimensions.width / windowDimensions.height
    const { t } = useTranslation();

    var minWidth = 160;
    var cardHeight = 500;

    if(windowDimensions.height >= 1600){
        cardHeight = 800;
    }

    if(windowDimensions.width < 500){
        minWidth = 240;
    }

    if(windowDimensions.width / windowDimensions.height < 1){
        displayOrientation = 'mobile';

        //phones
        if(windowDimensions.width < 768){

            if(windowDimensions.height > 700){
                minWidth = 300;
            }
            return(
                <div className='home-layer-3-container'>
                    <div className='layer-3-title'>
                        <p>{t("COME VISIT")}</p>
                        <p>{t("SOME OF OUR")}</p>
                        <p>{t("EVENTS")}</p>
                    </div>
                    <img src={BumpOff} alt='bump-off' id='bump-off' style={{ height: `30vh`}}/>
                    <img src={WaterDunk} alt='water-dunk' id='water-dunk' style={{height: `40vh`}}/>
                    <img src={BullRiding} alt='bull-riding' id='bull-riding' style={{height: `40vh`,  transform: `translate(80%, -5%)`}}/>
                    <img src={Bowling} alt='bowling' id='bowling' style={{ height:`30vh`}}/>
                    <div className='events-scroller' style={{top: `18%`, left: `0%`, height:`fit-content`, width: `100vw`, boxSizing: `content-box`}}>
                        <div className='scroller' style={{padding: `0.5em 1em`, minWidth: `${minWidth}vw`, height:`fit-content`}}>
                            <EventCard title='Ciena Networking Night' date='Oct 7th' description='Join us for some pancakes' image={Event1} orientation={displayOrientation} link=''/>
                            <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3} orientation={displayOrientation} link=''/>
                            <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2} orientation={displayOrientation} link=''/>
                            <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1} orientation={displayOrientation} link=''/>
                        </div>
                    </div>
                    <BinaryBackground />
                </div>
            )
        }
        //tablets
        else{
            return(
                <div className='home-layer-3-container'>
                    <div className='layer-3-title'>
                        <p>{t("COME VISIT")}</p>
                        <p>{t("SOME OF OUR")}</p>
                        <p>{t("EVENTS")}</p>
                    </div>
                    <img src={BumpOff} alt='bump-off' id='bump-off' style={{ height: `30vh`}}/>
                    <img src={WaterDunk} alt='water-dunk' id='water-dunk' style={{height: `40vh`}}/>
                    <img src={BullRiding} alt='bull-riding' id='bull-riding' style={{height: `40vh`,  transform: `translate(80%, -5%)`}}/>
                    <img src={Bowling} alt='bowling' id='bowling' style={{ height:`30vh`}}/>
                    <div className='events-scroller' style={{top: `18%`, left: `0%`, height:`fit-content`, width: `100vw`, boxSizing: `content-box`}}>
                        <div className='scroller' style={{padding: `0.5em 1em`, minWidth: `${minWidth}vw`, height: `fit-content`}}>
                            <EventCard title='Ciena Networking Night' date='Oct 7th' description='Join us for some pancakes' image={Event1} orientation={displayOrientation} link=''/>
                            <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3} orientation={displayOrientation} link=''/>
                            <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2} orientation={displayOrientation} link=''/>
                            <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1} orientation={displayOrientation} link=''/>
                        </div>
                    </div>
                    <BinaryBackground />
                </div>
            )
        }
    }

    return(
        <div className='home-layer-3-container'>
            <div className='layer-3-title'>
                <p>{t("COME VISIT")}</p>
                <p>{t("SOME OF OUR")}</p>
                <p>{t("EVENTS")}</p>
            </div>
            {
                screenRatio > 1.7 ? (
                    <div className='image-containers'>
                        <img src={Group20} alt='group-activities' id='group21' style={{height: `auto`, width: `100vw`, transform: `translateY(30%)`}}/>
                    </div>
                    
                ) :
                (<img src={Group20} alt='group-activities' id='group21' style={{height: `70vh`, width: `auto`}}/>)
            }
            <div className='events-scroller'>
                <div className='scroller' style={{padding: `2em`}}>
                    <EventCard title='Ciena Networking Night' date='Oct 7th' description='Join us for some pancakes' image={Event1} orientation={displayOrientation} link=''/>
                    <EventCard title='Saunders Farm' date='Oct 14th' description='Join us for a night of terror at Saunders!' image={Event3} orientation={displayOrientation} link=''/>
                    <EventCard title='Web Dev for Dummies' date='Jan 10th' description='Learn how to build lovely sites like ours!' image={Event2} orientation={displayOrientation} link='https://www.instagram.com/p/C10hIRuRVw5/?img_index=1'/>
                    <EventCard title='Sweets and Skating' date='Jan 11th' description='Eat sweets and skate' image={Event1} orientation={displayOrientation} link=''/>
                </div>
            </div>
            <BinaryBackground />
        </div>
    )
}

export default HomeLayer3;