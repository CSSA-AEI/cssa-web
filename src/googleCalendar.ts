import axios from 'axios';

const API_KEY = 'AIzaSyCTQ3MFIJ6i6_10BHyLODLP-pBQesLBe2c';
const CALENDAR_ID = "it@cssa-aei.ca";


export const fetchEvents = async (year : number, month : number) => {

    var url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    if(year !== undefined && month !== undefined){
      const startDate = new Date(year, month - 1, 1).toISOString();
      const endDate = new Date(year, month, 0); 
      endDate.setHours(23, 59, 59, 999);
      const endDateString = endDate.toISOString();
      url += `&timeMin=${startDate}&timeMax=${endDateString}`;
    }
    
    
    try {
      const response = await axios.get(url);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching events from Google Calendar', error);
      return [];
    }
};
