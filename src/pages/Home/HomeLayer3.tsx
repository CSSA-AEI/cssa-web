import React from 'react';
import './home-layer-3.css';
import BumpOff from '../../images/scrapbook-images/bump_off.png';
import WaterDunk from '../../images/scrapbook-images/water_dunk.png';
import BullRiding from '../../images/scrapbook-images/bull_riding.png';
import Bowling from '../../images/scrapbook-images/bowling.png';
import EventCard, {type EventCardProps } from './EventCard';
import Event1 from '../../images/events-posters/CienaNetworking.webp';
import Event2 from '../../images/events-posters/webdevevent.webp';
import Event3 from '../../images/events-posters/halloween_event.webp';
import Event4 from '../../images/events-posters/event1.webp';
import Group20 from '../../images/scrapbook-images/Group-20.png';
import BinaryBackground from '../../components/Background/BinaryBackground';
import { useTranslation } from 'react-i18next';

interface HomeLayer3Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer3: React.FC<HomeLayer3Props> = ({windowDimensions}) => {

    const { t } = useTranslation();
    const isPortrait = windowDimensions.width < windowDimensions.height;
    const displayOrientation = isPortrait ? 'mobile' : 'desktop';
    const screenRatio = windowDimensions.width / windowDimensions.height;
    
    let minWidth = 160;

    if (windowDimensions.width < 500) {
        minWidth = 240;
    } 
    
    if (isPortrait && windowDimensions.width < 768 && windowDimensions.height > 700) {
        minWidth = 300;
    }

    const eventCards: Omit<EventCardProps, 'orientation'>[] = [
        {
            title: 'Ciena Networking Night',
            date: 'Oct 7th',
            description: 'Join us for some pancakes',
            image: Event1, 
            link: ''
        }, 
        {
            title: 'Saunders Farm',
            date: 'Oct 25th',
            description: 'Join us for a night of terror at Saunders!',
            image: Event3,
            link: ''
        },
        {
            title: 'Web Dev for Dummies',
            date: 'Jan 10th',
            description: 'Learn how to build lovely sites like ours!',
            image: Event2,
            link: ''
        },
        {
            title: 'Sweets and Skating',
            date: 'Jan 11th',
            description: 'Eat sweets and skate',
            image: Event4,
            link: ''
        }
    ];

    return(
        <div className='home-layer-3-container'>
            <div className='layer-3-title'>
                <p>{t("COME VISIT")}</p>
                <p>{t("SOME OF OUR")}</p>
                <p>{t("EVENTS")}</p>
            </div>

            {
            isPortrait ? (
                <>
                    <img src={BumpOff} alt='bump-off' id='bump-off' style={{ height: `30vh`}}/>
                    <img src={WaterDunk} alt='water-dunk' id='water-dunk' style={{height: `40vh`}}/>
                    <img src={BullRiding} alt='bull-riding' id='bull-riding' style={{height: `40vh`,  transform: `translate(80%, -5%)`}}/>
                    <img src={Bowling} alt='bowling' id='bowling' style={{ height:`30vh`}}/> 
                </>
            ) : screenRatio > 1.7 ? (
                <div className='image-containers'>
                    <img src={Group20} alt='group-activities' id='group21' style={{height: `auto`, width: `100vw`, transform: `translateY(30%)`}}/>
                </div>    
            ) : (
                <img src={Group20} alt='group-activities' id='group21' style={{height: `70vh`, width: `auto`}}/>
            )}

            {/* Event Cards Scroller (should probably move embedded styles to css) */}
            <div className='events-scroller' style={isPortrait ? {top: `18%`, left: `0%`, height:`fit-content`, width: `100vw`, boxSizing: `content-box`} : {}}>
                <div className='scroller' style={isPortrait ? {padding: `0.5em 1em`, minWidth: `${minWidth}vw`, height:`fit-content`} : {padding: `2em`}}>
                    {eventCards.map((card, index) => (
                        <EventCard key={index} title={card.title} date={card.date} description={card.description} image={card.image} orientation={displayOrientation} link={card.link}/>
                    ))}
                </div>
            </div>
            <BinaryBackground />
        </div>
    )
}

export default HomeLayer3;