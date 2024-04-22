import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';
import { deleteEvent } from '../Events/deleteEvent.jsx';


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

    const handleDeleteEvent = (eventId) => {
      setEventsData(events.filter(event => event.id !== eventId));
    };
  };

  return (
  <div>
    <Calendar
      onSelectEvent={(event) => alert(event.title)}
      onSelectSlot={handleSelect}
      localizer={localizer}
      {...events.map(event => (
      <deleteEvent key={event.id} id={event.id} title={event.title} onDelete={handleDeleteEvent} />
      ))}
      selectable={true}
      events={eventsData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      />
  </div>
)}

export default MyCalendar;