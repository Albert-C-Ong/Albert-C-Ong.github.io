/*
Written by Albert Ong

Created: 2023.08.18
*/

import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import location_icon from "./assets/location_icon.png";
import cantonese_vocabulary_table_1 from "./assets/project images/cantonese_vocabulary_table_1.png";
import cosaic_1 from "./assets/project images/cosaic_1.png";
import lyfestyle_1 from "./assets/project images/lyfestyle_1.png";
import virisol_1 from "./assets/project images/virisol_1.png";
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import ProjectModal from './ProjectModal';


const Home = () => {

  document.title = "Albert Ong";

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);

  const handleClose4 = () => setShowModal4(false);
  const handleShow4 = () => setShowModal4(true);


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
            <img 
              class="project-image rounded" 
              src={lyfestyle_1} 
              alt="lyfestyle"
              onClick={handleShow1}
              style={{cursor: "pointer"}}
            />
            <ProjectModal
              show={showModal1}
              onHide={handleClose1}
              index="0"
            />
          </div>
          <div class="col-md-6">
            <img 
              class="project-image rounded" 
              src={cosaic_1} 
              alt="cosaic"
              onClick={handleShow2}
              style={{cursor: "pointer"}}
            />
            <ProjectModal
              show={showModal2}
              onHide={handleClose2}
              index="1"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <img 
              class="project-image rounded" 
              src={cantonese_vocabulary_table_1} 
              alt="cantonese vocabulary table"
              onClick={handleShow3}
              style={{cursor: "pointer"}}
            />
            <ProjectModal
              show={showModal3}
              onHide={handleClose3}
              index="2"
            />
          </div>
          <div class="col-md-6">
            <img 
              class="project-image rounded" 
              src={virisol_1} 
              alt="virisol"
              onClick={handleShow4}
              style={{cursor: "pointer"}}
            />
          </div>
          <ProjectModal
              show={showModal4}
              onHide={handleClose4}
              index="3"
            />
        </div>
      </div>
      
      <BottomNavbar/>
    </div>
  );
};

export default Home;