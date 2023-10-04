import React from "react";
import Layout from "../../components/layout/Layout";
import "./login.css"

const Login = () => {
 
  return (
    <Layout>
     
     
     <div className="flex h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-indigo-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Enter your phone number"
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
