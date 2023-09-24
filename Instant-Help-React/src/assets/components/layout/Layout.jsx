import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../footer/footer";
import { Typewriter } from 'react-simple-typewriter'

import "./layout.css";

const Layout = (props) => {
  return (
    <div>
      {/* Nav var Start  */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/post"> Post Your Service </Link>
              </li>
            </ul>
          </div>
          <div className="middle-nav">
            <Link to="/post"> <button className="btn btn-success">
            
              Post Your Service 
            </button> </Link>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            
             <Typewriter
            words={['Instant Help ',' Find The People , Solve The Problem ']}
            loop={100}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
              </a>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle ml-10">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      {props.children}
      <div className="ftr"></div>
      <Footer />
      
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired, // This ensures that 'children' is provided and of type 'node'
};

export default Layout;
