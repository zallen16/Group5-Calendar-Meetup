import MyCalendar from "../components/CalendarForm";
import Navbar from "../components/navbar";
// import Selectable from "../Events/selectable.jsx";

import { Link } from "react-router-dom";

export default function Home() {
    const events = [
        {
        id: 1,
        title: "First event",
        start: new Date(2024, 4, 18),
        end: new Date(2024, 4, 19)
    }
    ]
    return (
        <div className="calender-container">
            <Navbar></Navbar>
            <MyCalendar myEventsList={events}/>
        </div>
    );
};