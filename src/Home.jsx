import React from "react";
import "./home.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiArrowToBottom } from "react-icons/bi";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <p className="text1">HI, I'M</p>

        <h2>
          <span> Green</span>a Baiju
        </h2>

        <h3>Full Stack Developer</h3>

        <p className="para">
          I build modern and responsive websites using React, JavaScript and
          other web technologies.
        </p>

        <div className="linkcv">
         
          <button className="btn1">View My Work</button>
          <a href="Greena_resume_n.pdf" target="_blank">
            Download Resume <BiArrowToBottom />
          </a>
        </div>

        <div className="icons">
          <a href="https://github.com/repos?q=owner%3A%40me" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/greena-baiju/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
      image
      <div></div>
    </section>
  );
};

export default Home;
