import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';
import { ADD_PROFILE } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_PROFILE);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const { data } = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          name: formState.firstName + " " + formState.lastName
        },
      });
      const token = data.addProfile.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
      <div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
          <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Signup</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
              {/* <label htmlFor="firstName">First Name:</label> */}
              <input required 
                placeholder="First Name"
                name="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
              {/* <label htmlFor="lastName">Last Name:</label> */}
              <input required 
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
              {/* <label htmlFor="email">Email:</label> */}
              <input required 
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium ">
              {/* <label htmlFor="pwd">Password:</label> */}
              <input required 
                placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Submit</button>
            </div>
          </form>
          <Link to="/login">← Go to Login</Link>
        </div>
      </div>
    );
  }
  
  export default Signup;