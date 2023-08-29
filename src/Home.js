/*
Written by Albert Ong

Created: 2023.08.18
*/

import React from "react";
import location_icon from "./assets/location_icon.png";
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';


const Home = () => {

  document.title = "Albert Ong";

  return (
    <div 
      style={{
        backgroundImage: "url(${background})",
      }}
    >
      <Navbar/>

      <div class="heading">
        <h1 class="pt-5">Hi, I'm Albert!</h1>
        <p class="fs-2 mt-2">I'm a software engineer and hobbiest graphic designer.</p>
        <div class="mt-15">
          <img class="mb-1" src={location_icon} alt="location" height="20px"/><p class="location-text">San Francisco Bay Area</p>
        </div>
      </div>
      
      {/* TODO */}
      {/* <h2 class="text-center">PROJECTS</h2> */}
      
      <BottomNavbar/>
    </div>
  );
};

export default Home;