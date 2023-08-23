/*
Written by Albert Ong

Created: 2023.08.23
*/

import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import site_logo from "./assets/site_logo.png";
import profile_icon from "./assets/profile_icon.png";


const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-sm navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <Link to="/home">
            <img src={site_logo} alt="logo" height="80px"/>
          </Link>
          <ul class="navbar-nav mt-5">
            <li class="nav-item mt-2">
              <Link to="/about">ABOUT</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://drive.google.com/file/d/1XkxYo9yhDb0Qbjila_askLa7Iq6TAiEV/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:albert_ong_us@yahoo.com">CONTACT</a>
            </li>
          </ul>
          <img style={{marginLeft: "25px"}} class="mt-3" src={profile_icon} alt="profile" height="60px"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;