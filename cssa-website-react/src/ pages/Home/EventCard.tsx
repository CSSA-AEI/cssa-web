import React from "react";
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

    if(dimensions.width/dimensions.height >= 2.2){
        cardHeight = `50vh`;
    }
    else if(dimensions.width/dimensions.height >= 1.6){
        cardHeight = `53vh`
    }
    else if(dimensions.width/dimensions.height < 1.4 && dimensions.width < 850){
        cardHeight = `35vh`
    }
    else if(dimensions.width/dimensions.height < 1.4 && dimensions.width > 850){
        cardHeight = `40vh`
    }

    //mobile screens e.g. phones and tablets
    if(orientation ===  'mobile'){

        if(dimensions.width < 768){
            if(dimensions.height > 720){
                var eventWidth = 55;
            }
            else{
                eventWidth = 45;
            }
            return(
                <div className='cssa-event' style={{width: `fit-content`, maxWidth: `${eventWidth}vw`, justifyContent: `space-between`, height:`100%`}} onClick={() => { window.location.href = link}}>
                    <div className="event-image-container" style={{height: `70%`, width: `100%`}}>
                        <img src={image} style={{height: `auto`, width: `100%`}} alt='event-poster'/>
                        <div className="event-data-circle" style={{width: `10vw`, minHeight: `10vw`}}>
                            {date}
                        </div>
                    </div>
                    <div className='event-info' style={{width: `45vw`, height: `fit-content`, padding: `0`}}>
                        <div className="event-title" style={{padding: `0 0.5em`}}>{title}</div>
                        <div className="event-description" style={{padding: `0 0.5em`, wordWrap: `break-word`}}>{description}</div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='cssa-event' style={{width: `fit-content`, maxWidth: `35vw`, justifyContent: `space-between`, height:`100%`}} onClick={() => { window.location.href = link}}>
                    <div className="event-image-container" style={{height: `70%`, width: `100%`}}>
                        <img src={image} style={{height: `auto`, width: `100%`}} alt='event-poster'/>
                        <div className="event-data-circle" style={{width: `10vw`, minHeight: `10vw`}}>
                            {date}
                        </div>
                    </div>
                    <div className='event-info' style={{width: `35vw`, height: `fit-content`, padding: `0`}}>
                        <div className="event-title" style={{padding: `0 0.5em`}}>{title}</div>
                        <div className="event-description" style={{padding: `0 0.5em`, wordWrap: `break-word`}}>{description}</div>
                    </div>
                </div>
            )
        }

        
    }

    //For ultrawide screens, more convenient to do this way because only ration that has problems is 2.2+(21:9 aspect ratio)
    if(dimensions.width/dimensions.height >= 2.2){
        return(
            <div className='cssa-event' style={{height: cardHeight, maxWidth: `15vw`}} onClick={() => { window.location.href = link}}>
                <div className="event-image-container">
                    <img src={image} style={{height: `auto`, width:`100%`}} alt='event-poster'/>
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

    //Regular screens
    return(
        <div className='cssa-event' onClick={() => { window.location.href = link}}>
            <div className="event-image-container">
                <img src={image} alt='event-poster'/>
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