import React from "react";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import async from "hbs/lib/async";
// import "./login.css"

const Login = () => {
  
  const [mobile,setMobile] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try{
      const respose = await axios.post('http://localhost:3000/login', {
        mobile,
        password
      });

      if(respose.data.success){
        setMessage('Login Successful');
        console.log('Logged in\n');
        console.log(respose.data);

        const user = respose.data.user;
        navigate(`/LoginProfile`,{state: {user}});
      }
      else{
        setMessage('Mobile number or password is incorrect');
        console.log('Wrong password or mobile')
      }
    }catch(error){
      console.error(error);
    }
  }
  return (
    <Layout>
     
     
     <div className="flex h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">

            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full border border-indigo-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Enter your phone number"
              value={mobile}
              onChange={(e)=>{
                setMobile(e.target.value)
              }}
            />

          </div>

          <div className="mb-6">

            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-indigo-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
          >
            Login
          </button>
        </form>
      </div>
    </div>
      
    </Layout>
  );
};

export default Login;
