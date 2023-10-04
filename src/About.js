/*
Written by Albert Ong

Created: 2023.08.18
*/

import React from "react";
import about_icons from "./assets/about.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';


function About() {

  document.title = "Albert Ong | About";

  return (
    <div>
      <Navbar/>

      <div class="about-modal modal-body row">
        <div class="col-md-6">
            <h1 class="mt-1">About</h1>
            
            <div class="about-text">
              Hi, I'm a software engineering major from San Jose State University and a 
              hobbiest graphic designer with experience in web design and programming.

              I have most recently worked at Perspecta as a software engineer intern. I'm passionate about learning and 
              my personal motto is that you're never too old to learn something new. Other interests of mine include reading, gaming, and memeing. 

              <p class="mt-4">For inquiries, contact <a class="cornflowerblue" href="mailto:albert_ong_us@yahoo.com">albert_ong_us@yahoo.com</a></p>
            </div>
        </div>
        <div class="col-md-6 text-center">
          <img class="about-icons" src={about_icons} alt="about icons" height="420px"/>
        </div>
      </div>

      <BottomNavbar/>
    </div>
  );
}

export default About;