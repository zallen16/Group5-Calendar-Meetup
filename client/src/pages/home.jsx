import MyCalendar from "../components/CalendarForm";
// import Selectable from "../Events/selectable.jsx";
import {QUERY_PROFILE_EVENTS} from '../utils/queries'
import { useQuery } from "@apollo/client";


export default function Home() {
    const {loading, error, data} = useQuery(QUERY_PROFILE_EVENTS);
    let events = [];
    const userEvents = data?.profile?.eventList.map((element)=> {element._id});
    // if they are not logged in, only gets public events
    const eventListData = data?.allevents;
    if(eventListData?.length>0){
    for(let i=0; i<eventListData.length; i++){
        const currentEvent = eventListData[i];
        switch (currentEvent.privacySetting){
            case "public":
                break;
            case "friend-only":
                // if they don't own this event, skip it
                // todo: handle checking events of friends
                if (!userEvents.includes(currentEvent._id)){
                    continue;
                }
                break;
            default:
                // if they don't own this event, skip it
                if (!userEvents.includes(currentEvent._id)){
                    continue;
                }     
                break;
        }
        const formattedEvent = {
            title: currentEvent.eventName,
            start: new Date(currentEvent.eventStart*1),
            end: new Date(currentEvent.eventEnd*1)
        }
        events.push(formattedEvent);
    }
  }
    
    return (
        <div className="calender-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <MyCalendar myEventList={events}/>
            )}
            {error && (
                <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )}
        </div>
    );
}