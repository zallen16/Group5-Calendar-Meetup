import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';
import { ADD_EVENT } from '../utils/mutations';


function CreateEvent(props){
    const location = useLocation();
    const [formState, setFormState] = useState({ eventName: '', eventNotes: '', eventStart: location.state.start, eventEnd: location.state.end, enableNotifications: false, privacySetting: 'public' });
    const [addEvent] = useMutation(ADD_EVENT);
    const loggedIn = Auth.loggedIn();
    
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      let startDate = new Date(formState.eventStart);
      let endDate = new Date(formState.eventStart);
      console.log(startDate);
      const { data, error } = await addEvent({
        variables: {
            eventName: formState.eventName,
            eventNotes: formState.eventNotes,
            eventStart: startDate,
            eventEnd: endDate,
            enableNotifications: formState.enableNotifications,
            privacySetting: formState.privacySetting
        },
      });
      if (data){
        window.location.assign('/');
      } else {
        console.error(error);
        window.alert(error.message);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      if(name == "enableNotifications"){
        setFormState({
            ...formState,
            enableNotifications: event.target.checked,
        });
        return;
      }
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div className="max-w-[280px] mx-auto">
          <div className="flex flex-col items-center mt-[10vh]">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Create an Event</h2>
            {loggedIn ? (
              <form onSubmit={handleFormSubmit}>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
                <input required 
                  placeholder="Event Name"
                  name="eventName"
                  id="eventName"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
                <input required 
                  placeholder="Event Description"
                  name="eventNotes"
                  id="eventNotes"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
                <input required 
                  type="datetime-local"
                  name="eventStart"
                  id="eventStart"
                  onChange={handleChange}
                  value={location.state.start}
                />
              </div>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
                <input required 
                  type="datetime-local"
                  name="eventEnd"
                  id="eventEnd"
                  onChange={handleChange}
                  value={location.state.end}
                />
              </div>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
                Enable Notifications: <input
                  type="checkbox"
                  name="enableNotifications"
                  id="enableNotifications"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " name="privacySetting" onChange={handleChange}>
                Privacy Settings:
                <label>
                    <br />
                    <input type="radio" name="privacySetting" value="Public" defaultChecked />
                    Public
                </label>
                <label>
                    <br />
                    <input type="radio" name="privacySetting" value="Friend-Only" />
                    Friend-Only
                </label>
                <label>
                    <br />
                    <input type="radio" name="privacySetting" value="Private" />
                    Private
                </label>
              </div>
                <div className="flex-row flex-end">
                    <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Submit</button>
                </div>
            </form>
            ) : (
              <p>
                Log in to create an Event
                <Link to="/login">← Go to Login</Link>
              </p>
            )}
          </div>
        </div>
      );
}

export default CreateEvent;
