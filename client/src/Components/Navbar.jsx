import React from "react";
import "./Navbar.css"; // import the Navbar styling
import logo from "../utils/logo-black.png";
// import { NavLink } from "react-router-dom";
// import Login from "./HomePage/Login";

import {useNavigate, NavLink} from 'react-router-dom';

// import logo here
function Navbar() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };


  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={navigateToHome}>
        <img src={logo} alt="lo1go" />
        <h4>Quick PnD</h4>
      </div>
      <div className="navbar__links">
        {/* <a href="#">Publish a route</a> */}
        <NavLink to="/publishpage">Publish a Route</NavLink>
        {/* <button onClick={navigateToLogin}>Login</button> */}

        {/* <Routes>
          <Route path="/login" element={<Login />} />
        </Routes> */}

        {/* route tag to route to login page */}
        <NavLink to="/login">Login / Sign Up</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
