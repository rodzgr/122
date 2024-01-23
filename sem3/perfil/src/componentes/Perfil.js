import React from "react";
import '../styles/Perfil.css';

function Perfil() {
  return (
    <div>
      <h1>Rodrigo Zanca</h1>

      <div className="perfil">
        <img src="/assets/images/perfil_picture.jpeg" alt="Perfil" className="perfil-img" />
      </div>

      <p>Software Engineer</p>
      <p>Experienced professional with a passion for coding.</p>

      <div className="social-icons">
        <img src="icons/github.svg" alt="GitHub" />
        <img src="cons/twitter.svg" alt="Twitter" />
        <img src="icons/linkedin.svg" alt="LinkedIn" />
        <img src="icons/youtube.svg" alt="YouTube" />
      </div>

      <div className="subtitulo"> 
        <h3>7+</h3>
        <p>Years of Work Experience</p>
      </div>

      <div className="subtitulo"> 
        <h3>Strong</h3>
        <p>Problem-Solving Skills</p>
      </div>

      <div className="subtitulo"> 
        <h3>Effective</h3>
        <p>Collaborator</p>
      </div>

      <div className="button-container">
        <button className="button">Download CV</button>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
}

export default Perfil;
