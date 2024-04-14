import MyCalendar from "../components/CalendarForm";
export default function Home() {
    const events = []
    return (
        <div>
            <h1>Home Page</h1>
            <MyCalendar myEventsList={events}/>
        </div>
    )
}