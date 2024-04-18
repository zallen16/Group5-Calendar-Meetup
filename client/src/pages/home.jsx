import MyCalendar from "../components/CalendarForm";
import { Link } from "react-router-dom";


export default function Home() {
    const events = []
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