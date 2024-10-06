import React, {useEffect, useState} from 'react';
import { fetchEvents } from '../../googleCalendar';
import './calendar.css';

interface CalendarProps {
    activeDay: number;
    year: number;
    month: number;
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setEventsList: React.Dispatch<React.SetStateAction<any[]>>;
    setActiveDay: React.Dispatch<React.SetStateAction<number>>;
}

export function doesDayContainEvent(events : any[]){
    var mapDates = new Map<number, object[]>();
    for(let calendarEvent of events){
        let day = new Date(calendarEvent.start.dateTime)
        if(mapDates.has(day.getDate())){
            var temp = mapDates.get(day.getDate())
            var eventDetails = {
                "date": day.toLocaleDateString(),
                "startTime": day.toTimeString(),
                "endTime": new Date(calendarEvent.end.dateTime).toTimeString(),
                "title": calendarEvent.summary,
                "id": calendarEvent.id,
                "description": calendarEvent.description,
                "link": calendarEvent.htmlLink
            }
            temp?.push(eventDetails);
        }
        else{
            var holder = []
            eventDetails = {
                "date": day.toLocaleDateString(),
                "startTime": day.toTimeString(),
                "endTime": new Date(calendarEvent.end.dateTime).toTimeString(),
                "title": calendarEvent.summary,
                "id": calendarEvent.id,
                "description": calendarEvent.description,
                "link": calendarEvent.htmlLink
            }
            holder.push(eventDetails);
            mapDates.set(day.getDate(), holder)
        }
    }
    return mapDates;
}

const Calendar: React.FC<CalendarProps> = ({ year, month, setMonth, setActiveDay, activeDay, setEventsList}) => {

    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getEvents = async () => {
            const events = await fetchEvents(year, month);
            setEvents(events);
            setEventsList(events)
            setLoading(false);
        };
    
        getEvents();
    }, [year, month, setEventsList]);


    var currentDay = new Date().toLocaleDateString().split('/');
    var datesMap = doesDayContainEvent(events);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    const weeks: JSX.Element[][] = [];
    let days: JSX.Element[] = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(
            <div
                className={
                    (month.toString() === currentDay[0] && year.toString() === currentDay[2] && day.toString() === currentDay[1])
                        ? `calendar-day ${activeDay === day ? 'active-day' : ''}`
                        : `calendar-day ${activeDay === day ? 'active-day' : ''}`
                }
                key={day}
                onClick={() => setActiveDay(day)}
            >
                {day}
                { (!loading && datesMap.has(day)) && <div className={`event-indicator active-event`}></div>}
            </div>
        );
        if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
            weeks.push(days);
            days = [];
        }
    }

    return (
        <div className='calendar-container'>
            <div className='calendar-header'>
                <div className='left-side'>
                    <div className='left-button' onClick={() => {month--; setMonth(month)}}>&#8249;</div>
                    <h2>{monthNames[month - 1]} {year}</h2>
                </div>
                <div className='right-button'>
                    <div className='right-button' onClick={() => {month++; setMonth(month)}}>&#8250;</div>
                </div>
            </div>
            
            <div className='calendar-table'>
                <div className='month-row'>
                    {dayNames.map((dayName, index) => (
                        <div key={index}>{dayName}</div>
                    ))}
                </div>
                <div className='days-rows'>
                    {weeks.map((week, index) => (
                        <div key={index}>{week}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
