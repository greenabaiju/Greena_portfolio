
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

       
        <div className="about-left">
          <span className="about-title">ABOUT ME</span>

          <h2>
            Turning ideas into <b>digital experiences.</b>
          </h2>

          <p>
            I’m Greena Baiju, a Full Stack Developer with 5+ years of
            experience in web design and development. I have experience
            working with HTML, CSS, JavaScript, Bootstrap, WordPress and
            Joomla.
          </p>

          <p>
            Currently, I am improving my Full Stack Development skills
            with React.js, Node.js, Express.js and MongoDB. I enjoy
            building responsive, user-friendly and functional websites.
          </p>

          <a href="/contact" target="_blank"
              rel="noreferrer" className="about-btn">
            Let's Connect
          </a>
        </div>

       
        <div className="about-right">

          <div className="about-card">
            <span>01</span>
            <h3>Web Design</h3>
            <p>
              Creating clean, responsive and user-friendly website
              interfaces using modern web technologies.
            </p>
          </div>

          <div className="about-card">
            <span>02</span>
            <h3>Frontend Development</h3>
            <p>
              Building interactive user interfaces using JavaScript,
              React.js, Bootstrap and reusable components.
            </p>
          </div>

          <div className="about-card">
            <span>03</span>
            <h3>Full Stack Development</h3>
            <p>
              Developing full-stack applications using React.js,
              Node.js, Express.js and MongoDB.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

