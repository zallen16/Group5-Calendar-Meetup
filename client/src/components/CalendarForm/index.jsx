import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';

const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => {
  console.log(props.myEventsList)
  console.log(localizer)
  return (
  <div>
    <Calendar
      localizer={localizer}
      events={props.myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)}

export default MyCalendar;