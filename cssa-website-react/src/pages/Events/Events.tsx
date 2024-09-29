import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import BinaryEvents from './BinaryEvents';
import { doesDayContainEvent } from './Calendar';
import EventsPage from '../../images/scrapbook-images/EventsPage.webp';
import DayEvent from './DayEvent';
import { useTranslation } from 'react-i18next';
import './events.css';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Events: React.FC = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth()+ 1);
  const [eventsList, setEventsList] =  useState<any[]>([]);
  const [activeDay, setActiveDay] = useState<number>(new Date().getDate());
  const [activeYear, setActiveYear] = useState<number>(new Date().getFullYear());
  const [events, setEvents] = useState<object[] | undefined>([]);

  const { t } = useTranslation();

  useEffect(() => {
        var eventsOnDay = doesDayContainEvent(eventsList)
        var dayEvents = eventsOnDay.get(activeDay);
        setEvents(dayEvents)
  }, [eventsList, activeDay]);


  if(windowDimensions.width / windowDimensions.height <= 1){
    return(
            <div className='events-page-container' style={{height: `fit-content`}}>
                <BinaryEvents />
                <div className='event-body' style={{flexDirection: `column`, height: `fit-content`, width: `100vw`}}>
                    <div className='events-list-container' style={{width: `100%`, padding: `1em`, height: `80vh`}}>
                        <div className='events-header-container'>
                            <div className='events-header'>Events</div>
                            <div className='events-blurb'>Check out our events!</div>
                        </div>
                        <div className='events-list'>
                            <div className='events-container'>
                                <div className='events-date'>
                                    {`${new Date(activeYear, calendarMonth-1, activeDay).toDateString()}`} 
                                </div>
                                {
                                (events === undefined) ? 
                                    <div className='events-list-body-empty'>
                                        <p>Unfortunately there are no events today :(</p>
                                        <p>Feel free to stop by the office though!</p>
                                    </div>
                                    :
                                    <div className='events-list-body'>
                                        <div className='events-list-body'>
                                            {events.map((event, index) => (
                                                <DayEvent key={index} eventsOnDay={event} />
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div> 
                        </div>
                    </div>
                    <div className='events-calendar-container' style={{width: `100%`}}>
                        <div className='event-calendar' style={{height: `fit-content`}}>
                            <Calendar 
                                year={activeYear} 
                                month={calendarMonth} 
                                setMonth={setCalendarMonth} 
                                setEventsList={setEventsList} 
                                activeDay={activeDay} 
                                setActiveDay={setActiveDay}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
  }

  return (
        <div className='events-page-container'>
            <BinaryEvents />
            <img src={EventsPage} id="events-page-footer"/>
            <div className='event-body' style={(windowDimensions.width / windowDimensions.height <= 1) ? { display: 'flex', flexDirection: 'column' } : {}}>
                <div className='events-list-container'>
                    <div className='events-header-container'>
                        <div className='events-header'>{t("Events")}</div>
                        <div className='events-blurb'>Check out our events!</div>
                    </div>
                    <div className='events-list'>
                        <div className='events-container'>
                            <div className='events-date'>
                                {`${new Date(activeYear, calendarMonth-1, activeDay).toDateString()}`} 
                            </div>
                            {
                            (events === undefined) ? 
                                <div className='events-list-body-empty'>
                                    <p>Unfortunately there are no events today :(</p>
                                    <p>Feel free to stop by the office though!</p>
                                </div>
                                :
                                <div className='events-list-body'>
                                    {events.map((event, index) => (
                                        <DayEvent key={index} eventsOnDay={event} />
                                    ))}
                                </div>
                            }
                        </div> 
                    </div>
                </div>
                <div className='events-calendar-container'>
                    <div className='event-calendar'>
                        <Calendar 
                            year={activeYear} 
                            month={calendarMonth} 
                            setMonth={setCalendarMonth} 
                            setEventsList={setEventsList} 
                            activeDay={activeDay} 
                            setActiveDay={setActiveDay}
                        />
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Events;