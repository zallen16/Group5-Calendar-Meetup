import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';
// import { BasicModal } from '../Modal/index.jsx';


const localizer = dayjsLocalizer(dayjs)

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  const BasicModal = 

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
        style={{ height: 500 }}></Calendar>
      </div>
  )
}

export default MyCalendar;
