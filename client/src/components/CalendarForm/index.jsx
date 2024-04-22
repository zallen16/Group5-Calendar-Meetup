import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';


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

  const handleDelete = () => {
    console.log('Delete clicked');
  }

  return (
  <div>
    <button 
      onClick={handleDelete}
      className={'delete-button'}>
      {'DELETE'}</button>
    <Calendar
      onSelectEvent={(event) => alert(event.title)}
      onSelectSlot={handleSelect}
      localizer={localizer}
      selectable={true}
      events={eventsData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  
)}

export default MyCalendar;