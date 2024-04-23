import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
//import { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link, useNavigate } from "react-router-dom";
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';


const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => {
  //const [eventsData, setEventsData] = useState([]);
  const navigate = useNavigate();
  const eventsData = props.myEventList;
  
  const handleSelect = ({ start, end }) => {
    const dateStart = new Date(start);
    const dateTimeStart = (new Date(dateStart.getTime() - dateStart.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    const dateEnd = new Date(end);
    const dateTimeEnd = (new Date(dateEnd.getTime() - dateEnd.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    navigate('/CreateEvent', {state: {start: dateTimeStart, end: dateTimeEnd}});
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