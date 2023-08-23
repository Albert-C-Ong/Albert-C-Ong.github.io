/*
Written by Albert Ong

Created: 2023.08.18
*/

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import site_logo from "./assets/site_logo.png";
import location_icon from "./assets/location_icon.png";
import github_icon from "./assets/github_icon.png";
import email_icon from "./assets/email_icon.png";
import about_icons from "./assets/about.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';


function About() {

  document.title = "Albert Ong | About";

  return (
    <div>
      <Navbar/>

      <div class="modal-body row m-5">
        <div class="col-md-6">
          <div class="">
            <h1 class="">About</h1>
            
            <div class="fs-5">
              Hi, I'm a software engineering major from San Jose State University and a 
              hobbiest graphic designer with experience in web design and programming.

              I have most recently worked at Perspecta as a software engineer intern. I'm passionate about learning and 
              my personal motto is that you're never too old to learn something new. Other interests of mine include reading, gaming, and memeing. 

              <p class="mt-5">For inquiries, contact <a style={{color: 'cornflowerblue'}} href="mailto:albert_ong_us@yahoo.com">albert_ong_us@yahoo.com</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img src={about_icons} alt="about icons" height="500px"/>
        </div>
      </div>

      <BottomNavbar/>
    </div>
  );
}

export default About;