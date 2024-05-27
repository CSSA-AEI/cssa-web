import React, { useRef, useState, useEffect} from "react";
import { getWindowDimensions } from "../../App";
import './event-card.css';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    image: any;
}
const EventCard: React.FC<EventCardProps> = ({title, date, description, image}) => {

    var dimensions = getWindowDimensions();
    var circleEventWidth = 30;

    if(dimensions.width/dimensions.height > 1.5 && dimensions.width < 1024){
        circleEventWidth = 28;
    }
    else if(dimensions.width/dimensions.height > 1.5){
        circleEventWidth = 30;
    }

    return(
        <div className='cssa-event'>
            <img src={image} />
            <div className="event-data-circle" style={{width: `${circleEventWidth}%`}}>
                {date}
            </div>
            <div className='event-info'>
                <div className="event-title">{title}</div>
                <div className="event-description">{description}</div>
            </div>
        </div>
    )
}

export default EventCard;