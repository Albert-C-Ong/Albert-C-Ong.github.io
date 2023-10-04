/*
Written by Albert Ong

Created: 2023.09.01
*/

import React from 'react';
import { Modal, Carousel} from 'react-bootstrap';
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
      link: "https://github.com/Albert-C-Ong/Lyfestyle"
    }, 
    {
      title: "Cosaic",
      description: "Image sharing website created for CS 157A: Introduction to Database Management Systems. Allows users to upload and share images to their profiles as well as update their status, post pictures, and add captions and hashtags.",
      images: [cosaic_1, cosaic_2, cosaic_3],
      link: "https://github.com/CS-157A-Team-38/CS157A-Team-38"
    },
    {
      title: "Cantonese Vocabulary Table",
      description: "Personal vocabulary table that was developed over the course of five years while learning Cantonese. Table currently features approximately 3,000 words across over 100 categories. Most recently added a search page to lookup which words are already in the database.",
      images: [cantonese_vocabulary_table_1, 
               cantonese_vocabulary_table_2, 
               cantonese_vocabulary_table_3],
      link: "https://github.com/Albert-C-Ong/Cantonese-Vocabulary-Table"
    },
    {
      title: "Virisol",
      description: "Virus detection website created for CS 174: Server-side Web Programing. Allows users to upload files and detect the presence of a known virus.",
      images: [virisol_1, virisol_2, virisol_3, virisol_4],
      link: "https://github.com/Albert-C-Ong/virisol"
    }
  ];

  const carouselData = carouselDataList[index];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title class="modal-title fs-4 black">
          <img 
            class="navbar-bottom-icon navbar-bottom-icon-link mb-1" 
            src={github_icon} 
            alt="GitHub icon"
            style={{marginLeft: "0px"}}
          />
          <a 
            class="cornflowerblue" 
            href={carouselData["link"]}
            target="_blank" 
            rel="noopener noreferrer"
            style={{textDecoration: "underline"}}
          >
            {carouselData["title"]}
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {carouselData["images"].map((image, index) => (
            <Carousel.Item>
              <img className="w-100" src={image}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer class="text-align-right m-3">
        <p style={{color: "dimgray"}}>{carouselData["description"]}</p>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
