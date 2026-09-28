import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import profile from "./assets/profileimg.png";

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaWordpress,
  FaJoomla,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

import { FaLink } from "react-icons/fa6";
import { BiArrowToBottom } from "react-icons/bi";

const Home=()=> {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <p className="text1">HI, I'M</p>

          <h2>
            <span>Green</span>a Baiju
          </h2>

          <h3>Full Stack Developer</h3>

          <p className="para">
            I build modern and responsive websites using React, JavaScript and
            other web technologies.
          </p>

          <div className="linkcv">
            <Link
              to="/projects"
              target="_blank"
              rel="noreferrer"
              className="btn1"
            >
              View My Work
            </Link>

            <a href="Greena_resume_n.pdf" target="_blank" rel="noreferrer">
              Download Resume <BiArrowToBottom />
            </a>
          </div>

          <div className="icons">
            <a
              href="https://github.com/greenabaiju"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/greena-baiju/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="profile">
          <img src={profile} alt="Greena Baiju" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="about-left">
            <span className="about-title">ABOUT ME</span>

            <h2>
              Turning ideas into <b>digital experiences.</b>
            </h2>

            <p>
              I'm Greena Baiju, a Full Stack Developer with 4+ years of
              experience in web design and development. I have experience
              working with HTML, CSS, JavaScript, Bootstrap, WordPress and
              Joomla.
            </p>

            <p>
              Currently, I am improving my Full Stack Development skills with
              React.js, Node.js, Express.js and MongoDB. I enjoy building
              responsive, user-friendly and functional websites.
            </p>

            <a
              href="/contact"
              target="_blank"
              rel="noreferrer"
              className="about-btn"
            >
              Let's Connect
            </a>
          </div>

          <div className="about-right">
            <div className="about-card">
              <span>01</span>
              <h3>Web Design</h3>
              <p>
                Creating clean, responsive and user-friendly website interfaces
                using modern web technologies.
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>Frontend Development</h3>
              <p>
                Building interactive user interfaces using JavaScript, React.js,
                Bootstrap and reusable components.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>Full Stack Development</h3>
              <p>
                Developing full-stack applications using React.js, Node.js,
                Express.js and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mainc" id="skills">
        <div className="heading">
          <span>MY SKILLS</span>

          <h2>
            Technologies <b>I Use</b>
          </h2>

          <p>Technologies I use to build modern web applications.</p>
        </div>

        <div className="skills">
          <div className="skill">
            <div className="icon">
              <FaHtml5 />
            </div>
            <h3>HTML</h3>
            <p>Structure of web pages</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaCss3Alt />
            </div>
            <h3>CSS</h3>
            <p>Design and responsive layouts</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaJs />
            </div>
            <h3>JavaScript</h3>
            <p>Interactive web applications</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaReact />
            </div>
            <h3>React</h3>
            <p>Building reusable components</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaNodeJs />
            </div>
            <h3>Node.js</h3>
            <p>Backend development</p>
          </div>

          <div className="skill">
            <div className="icon">
              <SiExpress />
            </div>
            <h3>Express</h3>
            <p>Creating REST APIs</p>
          </div>

          <div className="skill">
            <div className="icon">
              <SiMongodb />
            </div>
            <h3>MongoDB</h3>
            <p>Database management</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>Version control</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaBootstrap />
            </div>
            <h3>Bootstrap</h3>
            <p>Responsive layouts</p>
          </div>

          <div className="skill">
            <div className="icon">
              <SiTailwindcss />
            </div>
            <h3>Tailwind</h3>
            <p>Utility-first CSS</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaWordpress />
            </div>
            <h3>WordPress</h3>
            <p>Website development</p>
          </div>

          <div className="skill">
            <div className="icon">
              <FaJoomla />
            </div>
            <h3>Joomla</h3>
            <p>CMS development</p>
          </div>
        </div>
      </section>

      <section className="services" id="expertise">
        <div className="heading">
          <span>WHAT I DO</span>

          <h2>
            My <b>Expertise</b>
          </h2>

          <p>I create modern and responsive websites and web applications.</p>
        </div>

        <div className="servicecs">
          <div className="servicec card-1">
            <span className="number">01</span>

            <h3>Frontend Development</h3>

            <p>
              I create responsive and interactive websites using HTML, CSS,
              JavaScript and React.
            </p>

            <span className="tags">HTML</span>
            <span className="tags">CSS</span>
            <span className="tags">Javascript</span>
            <span className="tags">React</span>
          </div>

          <div className="servicec card-2">
            <span className="number">02</span>

            <h3>Backend Development</h3>

            <p>
              I develop backend applications and APIs using Node.js, Express and
              MongoDB.
            </p>

            <span className="tags">Node.js</span>
            <span className="tags">Express</span>
            <span className="tags">REST API</span>
            <span className="tags">MongoDB</span>
          </div>

          <div className="servicec card-3">
            <span className="number">03</span>

            <h3>Full Stack Development</h3>

            <p>I build complete web applications using the MERN stack.</p>

            <span className="tags">HTML</span>
            <span className="tags">CSS</span>
            <span className="tags">Javascript</span>
            <span className="tags">React</span>
            <span className="tags">Node.js</span>
            <span className="tags">Express</span>
            <span className="tags">REST API</span>
            <span className="tags">MongoDB</span>
          </div>

          <div className="servicec card-4">
            <span className="number">04</span>

            <h3>WordPress Development</h3>

            <p>
              I create and customize responsive WordPress websites for
              businesses and personal websites.
            </p>

            <span className="tags">WordPress</span>
            <span className="tags">CSS</span>
            <span className="tags">HTML</span>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="htext">
          <span>MY PROJECTS</span>

          <h2>
            My Recent <b>Work</b>
          </h2>

          <p className="para1">
            Explore a collection of web applications and projects I have
            developed using React, JavaScript, Node.js, Express and MongoDB.
          </p>

          <a
            href="https://github.com/greenabaiju"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View My Work
          </a>
        </div>

        <div className="right">
          <div className="move">
            <div className="card1">
              <img src="/project4.png" alt="React Website" />
            </div>

            <div className="text">
              <span>01</span>
              <h3>React Website</h3>
              <p>
                A modern React website built using reusable components and JSX.
              </p>

              <a
                href="https://react-website-bryusygbf-abcd-a874.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>

              <a
                href="https://github.com/greenabaiju/react_website.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="card1">
              <img src="/project1.png" alt="Swiggy Homepage Clone" />
            </div>

            <div className="text">
              <span>02</span>
              <h3>Swiggy Homepage Clone</h3>
              <p>
                A responsive food delivery website clone built using HTML5, CSS3
                and Bootstrap 5.
              </p>

              <a
                href="https://greenabaiju.github.io/swiggy-homepage-clone/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>

              <a
                href="https://github.com/greenabaiju/swiggy-homepage-clone.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7492267012891742211/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="card1">
              <img src="/project2.png" alt="HTML CSS Animation Project" />
            </div>

            <div className="text">
              <span>03</span>
              <h3>HTML & CSS Project</h3>
              <p>
                A modern web interface built using HTML5 and CSS3 with
                responsive layouts, animations and hover effects.
              </p>

              <a
                href="https://greenabaiju.github.io/Task-html-css-animation/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>

              <a
                href="https://github.com/greenabaiju/Task-html-css-animation"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="card1">
              <img src="/project3.png" alt="CSS Learning Website" />
            </div>

            <div className="text">
              <span>04</span>
              <h3>CSS Learning Website</h3>
              <p>
                A responsive educational website developed using HTML5 and CSS3.
              </p>

              <a
                href="https://greenabaiju.github.io/CSS_website/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>

              <a
                href="https://github.com/greenabaiju/CSS_website.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="heading">
          <span>MY JOURNEY</span>

          <h2>
            Experience <b>& Education</b>
          </h2>

          <p>My professional experience and academic background.</p>
        </div>

        <div className="experienceg">
          <div className="boxe">
            <h3>Experience</h3>

            <div className="carde">
              <span>2026 - Present</span>
              <h4>Fullstack Intern</h4>
              <h5>Luminar Technolab</h5>

              <p>
                Full Stack Web Development using React, Node.js, Express and
                MongoDB.
              </p>
            </div>

            <div className="carde">
              <span>2020 - 2024</span>
              <h4>Web Designer</h4>
              <h5>KELTRON · Kerala</h5>

              <p>
                WordPress and Joomla website development, maintenance, SEO and
                responsive design.
              </p>
            </div>
          </div>

          <div className="boxe">
            <h3>Education</h3>

            <div className="carde">
              <span>2022 - 2024</span>

              <h4>Master of Science in Computer Science</h4>

              <h5>Kerala University</h5>

              <p>Postgraduate studies in Computer Science.</p>
            </div>

            <div className="carde">
              <span>2017 - 2020</span>

              <h4>Bachelor of Science in Computer Science</h4>

              <h5>Kerala University</h5>

              <p>Undergraduate studies in Computer Science.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
