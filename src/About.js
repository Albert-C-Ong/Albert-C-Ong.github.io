/*
Written by Albert Ong

Created: 2023.08.18
*/

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import site_logo from "./assets/site_logo.png";
import location_icon from "./assets/location_icon.png";
import github_icon from "./assets/github_icon.png";
import email_icon from "./assets/email_icon.png";
import about_icons from "./assets/about.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {

  document.title = "Albert Ong | About";

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <Link to="/home">
              <img src={site_logo} alt="Logo" height="80px"/>
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
          </div>
        </div>
      </nav>

      <div class="modal-body row m-5">
        <div class="col-md-6">
          <div class="">
            <h1 class="">About</h1>
            
            <div class="fs-5">
              Hi, I'm a software engineering major from San Jose State University and a 
              hobbiest graphic designer with experience in web design and programming.

              I have most recently worked at Persepcta as a software engineer intern. I'm passionate about learning and 
              my personal motto is that you're never too old to learn something new. Other interests of mine include reading, gaming, and memeing. 

              <p class="mt-5">For inquiries, contact <a style={{color: 'cornflowerblue'}} href="mailto:albert_ong_us@yahoo.com">albert_ong_us@yahoo.com</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img src={about_icons} alt="about icons" height="500px"/>
        </div>
      </div>

      <nav class = "navbar navbar-default navbar-bottom mt-10">
        <ul class="navbar-nav list-group-horizontal mt-5">
          <li>
            <a href="https://github.com/Albert-C-Ong" target="_blank"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={github_icon} alt="GitHub icon"/>Albert-C-Ong</a>
          </li>
          <li>
            <a href="mailto:albert_ong_us@yahoo.com"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={email_icon} alt="email icon"/>albert_ong_us@yahoo.com</a>
          </li> 
          <li>
            <img class="navbar-bottom-icon" src={location_icon} alt="location icon"/>San Jose, CA
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default About;