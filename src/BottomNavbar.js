/*
Written by Albert Ong

Created: 2023.08.23
*/

import React, {useState} from "react";
import location_icon from "./assets/location_icon.png";
import github_icon from "./assets/github_icon.png";
import github_icon_hover from "./assets/github_icon_hover.png";
import email_icon from "./assets/email_icon.png";
import email_icon_hover from "./assets/email_icon_hover.png";


const BottomNavbar = () => {

  const [isGithubHovered, setGithubHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false);

  const handleGithubHover = () => {
    setGithubHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setGithubHovered(false);
  };

  const handleEmailHover = () => {
    setEmailHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailHovered(false);
  };

  const github_icon_src = isGithubHovered ? github_icon_hover : github_icon;
  const email_icon_src = isEmailHovered ? email_icon_hover : email_icon;


  return (
    <nav class="navbar navbar-default navbar-bottom">
      <ul class="navbar-nav list-group-horizontal mt-5">
        <li 
          onMouseEnter={handleGithubHover}
          onMouseLeave={handleGithubMouseLeave}
        >
          <a href="https://github.com/Albert-C-Ong" target="_blank" rel="noopener noreferrer">
            <img 
              class="navbar-bottom-icon navbar-bottom-icon-link" 
              src={github_icon_src} 
              alt="GitHub icon"
            />
            Albert-C-Ong
          </a>
        </li>
        <li 
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailMouseLeave}
        >
          <a href="mailto:albert_ong_us@yahoo.com">
            <img 
              class="navbar-bottom-icon navbar-bottom-icon-link" 
              src={email_icon_src} 
              alt="email icon"
            />
            albert_ong_us@yahoo.com
          </a>
        </li> 
        <li>
          <img 
            class="navbar-bottom-icon" 
            src={location_icon} 
            alt="location icon"
          />
          San Jose, CA
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;