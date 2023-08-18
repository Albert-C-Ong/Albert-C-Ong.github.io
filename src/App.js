import site_logo from "./assets/site_logo.png";
import location_icon from "./assets/location_icon.png";
import github_icon from "./assets/github_icon.png";
import email_icon from "./assets/email_icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  document.title = 'Albert Ong';

  return (
    <div 
      style={{
        backgroundImage: "url(${background})",
      }}
    >

      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <a class="navbar-brand">
                <img src={site_logo} alt="Logo" height="80px"/>
            </a>
            <ul class="navbar-nav mt-5">
              <li class="nav-item ml-5">
                <a class="nav-link" href="about.html">ABOUT</a>
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

      <div class="heading">
        <h1 class="pt-5">Hi, I'm Albert!</h1>
        <p class="subtitle mt-2">I'm a software engineer and hobbiest graphic designer.</p>
        <div class="mt-15">
          <img class="mb-1" src={location_icon} alt="location" height="20px"/><p class="location-text">San Francisco Bay Area</p>
        </div>
      </div>
      
      {/* <h2 class="text-center mb-5">PROJECTS</h2> */}

      <nav class = "navbar navbar-default navbar-bottom">
        <ul class="navbar-nav list-group-horizontal mt-5">
          <li>
            <a href="https://github.com/Albert-C-Ong" target="_blank"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={github_icon} alt="GitHub icon"/>Albert-C-Ong</a>
          </li>
          <li>
            <a href="mailto:albert_ong_us@yahoo.com"><img class="navbar-bottom-icon navbar-bottom-icon-link" src={email_icon} alt="email icon"/>albert_ong_us@yahoo.com</a>
          </li> 
          <li>
            <img class="navbar-bottom-icon" src={location_icon} alt="location icon"/>San Jose, CA 95132
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
