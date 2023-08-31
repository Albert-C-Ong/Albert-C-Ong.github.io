/*
Written by Albert Ong

Created: 2023.08.18
*/

import React from "react";
import location_icon from "./assets/location_icon.png";
import cantonese_vocabulary_table_1 from "./assets/project images/cantonese_vocabulary_table_1.png";
import cosaic_1 from "./assets/project images/cosaic_1.png";
import lyfestyle_1 from "./assets/project images/lyfestyle_1.png";
import virisol_1 from "./assets/project images/virisol_1.png";
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';


const Home = () => {

  document.title = "Albert Ong";

  return (
    <div>
      <Navbar/>

      <div class="heading">
        <h1 class="pt-5">Hi, I'm Albert!</h1>
        <p class="fs-2 mt-2">I'm a software engineer and hobbiest graphic designer.</p>
        <div class="mt-15">
          <img src={location_icon} alt="location" height="20px"/><p class="location-text">San Francisco Bay Area</p>
        </div>
      </div>
      
      <h2 class="text-center mb-3">PROJECTS</h2>
      <div style={{width: "600px"}} class="container text-center mb-5">
        <div class="row">
          <div class="col-md-6">
            <img class="project-image rounded" src={lyfestyle_1} alt="lyfestyle"/>
          </div>
          <div class="col-md-6">
            <img class="project-image rounded" src={cosaic_1} alt="cosaic"/>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <img class="project-image rounded" src={cantonese_vocabulary_table_1} alt="cantonese vocabulary table"/>
          </div>
          <div class="col-md-6">
            <img class="project-image rounded" src={virisol_1} alt="virisol"/>
          </div>
        </div>
      </div>
      
      <BottomNavbar/>
    </div>
  );
};

export default Home;