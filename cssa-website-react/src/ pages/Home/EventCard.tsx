import React, { useRef, useState, useEffect,} from "react";
import { useNavigate } from 'react-router-dom';
import { getWindowDimensions } from "../../App";
import './event-card.css';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    image: any;
    link: string;
    orientation: string;
}
const EventCard: React.FC<EventCardProps> = ({title, date, description, image, link, orientation}) => {
    

    var dimensions = getWindowDimensions();
    var cardHeight = `45vh`;

    if(dimensions.width/dimensions.height >= 1.7){
        cardHeight = `53vh`
    }
    else if(dimensions.width/dimensions.height < 1.4){
        cardHeight = `38vh`
    }

    if(orientation ===  'mobile'){
        return(
            <div className='cssa-event' style={{width: `fit-content`, maxWidth: `100%`, maxHeight: `100%`,  alignItems: 'stretch'}} onClick={() => { window.location.href = 'https://www.instagram.com/p/C10hIRuRVw5/?img_index=1'}}>
                <div className="event-image-container" style={{height: `70%`}}>
                    <img src={image} style={{height: `90%`, width: `auto`}}/>
                    <div className="event-data-circle" style={{width: `10vw`, minHeight: `10vw`}}>
                        {date}
                    </div>
                </div>
                <div className='event-info' style={{height: `fit-content`, width: `21vh`, padding: `0`}}>
                    <div className="event-title" style={{padding: `0 0.5em`}}>{title}</div>
                    <div className="event-description" style={{padding: `0 0.5em`, wordWrap: `break-word`}}>{description}</div>
                </div>
            </div>
        )
    }




    return(
        <div className='cssa-event' style={{height: cardHeight}} onClick={() => { window.location.href = 'https://www.instagram.com/p/C10hIRuRVw5/?img_index=1'}}>
            <div className="event-image-container">
                <img src={image} />
                <div className="event-data-circle" >
                    {date}
                </div>
            </div>
            <div className='event-info'>
                <div className="event-title">{title}</div>
                <div className="event-description">{description}</div>
            </div>
        </div>
    )
}

export default EventCard;