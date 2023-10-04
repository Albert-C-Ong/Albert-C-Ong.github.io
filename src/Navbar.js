/*
Written by Albert Ong

Created: 2023.08.23
*/

import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Route, Link} from "react-router-dom";
import site_logo from "./assets/site_logo.png";
import profile_icon from "./assets/profile_icon.png";


const TopNavbar = () => {

  return (
    <Navbar className="navbar" expand="lg">
      <Link to="/home">
        <img class="site-logo" src={site_logo} alt="logo"/>
      </Link>
      <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
        <Nav className="ml-auto mt-5">
          <Nav.Item>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://drive.google.com/file/d/1XkxYo9yhDb0Qbjila_askLa7Iq6TAiEV/view?usp=sharing" target="_blank" rel="noreferrer noopener">
              RESUME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="mailto:albert_ong_us@yahoo.com">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
        
      </Navbar.Collapse>
      {/* <img class="profile-icon ml-3" src={profile_icon} alt="profile"/> */}
    </Navbar>
    
    // <nav class="navbar navbar-expand-sm navbar-dark">
    //   <div class="container-fluid">
    //     <Link to="/home">
    //       <img class="site-logo" src={site_logo} alt="logo"/>
    //     </Link>
    //     <div class="collapse navbar-collapse">
    //       <ul class="navbar-nav mt-5">
    //         <li class="nav-item mt-2">
    //           <Link to="/about">ABOUT</Link>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="https://drive.google.com/file/d/1XkxYo9yhDb0Qbjila_askLa7Iq6TAiEV/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="mailto:albert_ong_us@yahoo.com">CONTACT</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <img class="profile-icon ml-3" src={profile_icon} alt="profile"/>
    //   </div>
    // </nav>
  );
};

export default TopNavbar;