import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../footer/footer";
import { Typewriter } from "react-simple-typewriter";

import "./layout.css";

const Layout = (props) => {
  return (
    <div>
      {/* Nav var Start  */}

      <div className="navbar bg-base-100 h-1">
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
            <Link to="/post">
              {" "}
              <button className="btn btn-success">
                Post Your Service
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="navbar-center block h-22">
        <Link to="/">    <div className="logo btn btn-ghost block pt-2"> Instant Help </div> </Link>
          {/* <p className="slogan text-sm p-0">
          <a className="normal-case p-0">
            
             <Typewriter
            words={['Find The People , Solve The Problem ']}
            loop={100}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
              </a>
        </p> */}
        </div>
        <div className="navbar-end">
         
         <Link to="/login "> <button className="btn m-2 w-24 hover:bg-gray-200">Log In</button> </Link> 

         <Link to="/post">  <button className="btn w-24 hover:bg-gray-200">Sign Up</button> </Link>
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
