import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

import Auth from "../utils/auth";
import Navbar from "../components/navbar";

const Login = (props) => {
      const [formState, setFormState] = useState({ email: "", password: "" });
      const [login, { error, data }] = useMutation(LOGIN);
    
      // update state based on form input changes
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
          email: "",
          password: "",
        });
      };
    
      return (
        
        <div className="max-w-[280px] mx-auto">
          <div className="flex flex-col items-center mt-[10vh]">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
              Log In
            </h2>
            {data ? (
              <p>
                Success! You may now head <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  value={formState.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Your Email"
                />
                <input
                  value={formState.password}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Password"
                />
                <button
                  type="submit"
                  value="login"
                  className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                >Login</button>
              </form>
            )}
            <p className="text-center mt-3 text-[14px]">
              Don't have an account?
              <a href="/signup" className="text-gray-600">
                Create one
              </a>
            </p>
    
            {error && (
              <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )}
          </div>
        </div>
      );
    };
  export default Login
