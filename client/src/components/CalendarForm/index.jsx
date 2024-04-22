import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';
import { useMutation } from '@apollo/client';
import { DELETE_EVENT } from '../../utils/mutations';


const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => {
  const [eventsData, setEventsData] = useState([]);
  console.log(props.myEventsList)
  console.log(localizer)
  
  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  const [deleteEvent] = useMutation(DELETE_EVENT);

  const handleDeleteEvent = async (eventId) => {
    try {
      
      setEvents(events.filter(event => event.id !== eventId));
      
      await deleteEvent({ variables: { eventId } });
    } catch (error) {
      // Handle error
      console.error('Error deleting event:', error);
    }
  };

  return (
  <div>
    <Calendar
      onSelectEvent={(event) => alert(event.title)}
      onSelectSlot={handleSelect}
      localizer={localizer}
      selectable={true}
      events={eventsData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      {...events.map(event => (
        <removeEvent key={event.id} id={event.id} title={event.title} onDelete={handleDeleteEvent} />
      ))}
    />
  </div>
  
)}

export default MyCalendar;