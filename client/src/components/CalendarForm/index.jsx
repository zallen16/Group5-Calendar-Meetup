import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => (
  <div className='flex-box'>
    <Calendar
      localizer={localizer}
      events={props.myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;