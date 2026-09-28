import { FaGithub,FaLinkedin } from "react-icons/fa";
import "./projects.css";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="htext">
        <span>MY PROJECTS</span>

        <h2>
          My Recent <b>Work</b>
        </h2>

        <p className="para1">
          Explore a collection of web applications and projects I have developed
          using React, JavaScript, Node.js, Express and MongoDB. Each project
          focuses on creating responsive, user-friendly and functional web
          experiences.
        </p>

        <a href="https://github.com/repos?q=owner%3A%40me" target="_blank" className="btn">View My Work</a>
      </div>

      <div className="right">
        <div className="move">
          <div className="card1">
            <img src="/project1.png" alt="Project 1" />
          </div>

          <div className="text">
            <span>01</span>
            <h3>Swiggy Homepage Clone</h3>
            <p>
              A responsive food delivery website clone built using HTML5, CSS3
              and Bootstrap 5.
            </p>
            <a href="https://github.com/greenabaiju/swiggy-homepage-clone" target="_blank">
             <FaGithub/>
            </a>
             <a href="https://www.linkedin.com/feed/update/urn:li:activity:7492267012891742211/" target="_blank">
             <FaLinkedin/>
            </a>
            
          </div>
          <div className="card1">
            <img src="/project2.png" alt="Project 1" />
          </div>

          <div className="text">
            <span>02</span>

            <h3>HTML & CSS Project</h3>

            <p>
              A modern and visually appealing web interface built using HTML5
              and CSS3, featuring responsive layouts, animations and hover
              effects.
            </p>

             <a href="https://github.com/greenabaiju/Task-html-css-animation" target="_blank">
             <FaGithub/>
            </a>
             <a href="https://www.linkedin.com/feed/update/urn:li:activity:7482632450255552514/" target="_blank">
             <FaLinkedin/>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
