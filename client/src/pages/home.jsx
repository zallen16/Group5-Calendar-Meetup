import MyCalendar from "../components/CalendarForm";
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
        <div>
            <h1>Home Page</h1>
            <Link to='./login'>
                <button>Log in</button>
            </Link>
            <MyCalendar myEventsList={events}/>
        </div>
    )
}