import React from "react";
import './day-event.css';

interface DayEventProps {
    eventsOnDay : any;
}

const DayEvent: React.FC<DayEventProps> = ({eventsOnDay}) => {

    return(
        <a className="event-day-container" href={eventsOnDay.link}>
            <div className="event-day-info">
                <p className="event-day-title">{eventsOnDay.title}</p>
                <p className="event-day-time">{`Start Time: ${eventsOnDay.startTime.substring(0,5)}`}</p>
                <p className="event-day-time">{`End Time: ${eventsOnDay.endTime.substring(0,5)}`}</p>
                <p className="event-day-desc">{eventsOnDay.description}</p>
            </div>
        </a>
    )
}

export default DayEvent;