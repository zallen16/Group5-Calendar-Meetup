import MyCalendar from "../components/CalendarForm";

export default function Home() {
    const events = []
    return (
        <div className="calender-container">
            <MyCalendar myEventsList={events}/>
        </div>
    );
};