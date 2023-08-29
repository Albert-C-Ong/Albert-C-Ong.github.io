/*
Written by Albert Ong

Created: 2023.08.23
*/

import React from "react";
import location_icon from "./assets/location_icon.png";
import github_icon from "./assets/github_icon.png";
import email_icon from "./assets/email_icon.png";


const BottomNavbar = () => {

  return (
    <nav class = "navbar navbar-default navbar-bottom">
      <ul class="navbar-nav list-group-horizontal mt-5">
        <li>
          <a href="https://github.com/Albert-C-Ong" target="_blank" rel="noopener noreferrer"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={github_icon} alt="GitHub icon"/>Albert-C-Ong</a>
        </li>
        <li>
          <a href="mailto:albert_ong_us@yahoo.com"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={email_icon} alt="email icon"/>albert_ong_us@yahoo.com</a>
        </li> 
        <li>
          <img class="navbar-bottom-icon" src={location_icon} alt="location icon"/>San Jose, CA
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;