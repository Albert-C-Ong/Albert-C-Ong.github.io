/*
Written by Albert Ong

Created: 2023.09.01
*/

import React, { useState } from 'react';
import { Modal, Button, Carousel} from 'react-bootstrap';
import github_icon from "./assets/github_icon.png";
import cantonese_vocabulary_table_1 from "./assets/project images/cantonese_vocabulary_table_1.png";
import cantonese_vocabulary_table_2 from "./assets/project images/cantonese_vocabulary_table_2.png";
import cantonese_vocabulary_table_3 from "./assets/project images/cantonese_vocabulary_table_3.png";
import cosaic_1 from "./assets/project images/cosaic_1.png";
import cosaic_2 from "./assets/project images/cosaic_2.png";
import cosaic_3 from "./assets/project images/cosaic_3.png";
import lyfestyle_1 from "./assets/project images/lyfestyle_1.png";
import lyfestyle_2 from "./assets/project images/lyfestyle_2.png";
import lyfestyle_3 from "./assets/project images/lyfestyle_3.png";
import virisol_1 from "./assets/project images/virisol_1.png";
import virisol_2 from "./assets/project images/virisol_2.png";
import virisol_3 from "./assets/project images/virisol_3.png";
import virisol_4 from "./assets/project images/virisol_4.png";


function ProjectModal({show, onHide, index}) {

  const carouselDataList = [
    {
      title: "Lyfestyle",
      description: "Calorie tracking site created in a team of three for CMPE 133: Software Engineering II. Allows user to create a profile, login, and track the amount of calories they can consumed and burned over time.", 
      images: [lyfestyle_1, lyfestyle_2, lyfestyle_3], 
      link: ""
    }, 
    {
      title: "Cosaic",
      description: "Image sharing website created in a team of three for CS 157A: Introduction to Databse Management Systems",
      images: [cosaic_1, cosaic_2, cosaic_3]
    },
    {
      title: "Cantonese Vocabulary Table",
      description: "Personal vocabulary table that was developed for myself over the course of five years while learning Cantonese. Table currently features approximately 3,000 words across over 100 categories. Most recently added a search page to more quickly browse which words are already in the database.",
      images: [cantonese_vocabulary_table_1, 
               cantonese_vocabulary_table_2, 
               cantonese_vocabulary_table_3]
    },
    {
      title: "Virisol",
      description: "Virus detector",
      images: [virisol_1, virisol_2, virisol_3, virisol_4]
    }
  ];

  const carouselData = carouselDataList[index];

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title class="fs-4 black">{carouselData["title"]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {carouselData["images"].map((image) => (
            <Carousel.Item>
              <img className="w-100" src={image}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer class="text-align-right m-3">
        <p style={{color: "black"}}>{carouselData["description"]}</p>
        <img 
          class="navbar-bottom-icon navbar-bottom-icon-link" 
          src={github_icon} 
          alt="GitHub icon"
        />
        <a class="black" href="https://github.com/Albert-C-Ong/Cantonese-Vocabulary-Table" target="_blank" rel="noopener noreferrer">Github</a>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
