// import site_logo from "./public/site_logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  document.title = 'Albert Ong';
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">

            <a class="navbar-brand">
                <img class="site-logo" src="site_logo.png" alt="Logo"/>
            </a>

            <ul class="navbar-nav">

              <li class="nav-item">
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

      <h1 class="pt-5">Hi, I'm Albert!</h1>
      <p class="subtitle">I'm a software engineer and hobbiest graphic designer.</p>
      <p>San Francisco Bay Area</p>
      <h2 class="text-center">PROJECTS</h2>
    </div>
  );
}

export default App;
