import "./skill.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaWordpress,
  FaJoomla,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skill = () => {
  return (
    <section className="skill-page">

      <div className="skill-left">
        <span className="about-title">MY SKILLS</span>

        <h2>
          Technologies <b>I Work With</b>
        </h2>

        <p>
          I work with modern web technologies to create responsive,
          interactive and user-friendly websites and applications.
        </p>

        <p>
          My current focus is on improving my MERN stack development
          skills and building full stack web applications.
        </p>
      </div>


      <div className="skill-right">

        <div className="skill-box">
          <FaHtml5 />
          <div>
            <h3>HTML</h3>
            <p>Web Structure</p>
          </div>
        </div>

        <div className="skill-box">
          <FaCss3Alt />
          <div>
            <h3>CSS</h3>
            <p>Web Styling</p>
          </div>
        </div>

        <div className="skill-box">
          <FaJs />
          <div>
            <h3>JavaScript</h3>
            <p>Web Interaction</p>
          </div>
        </div>

        <div className="skill-box">
          <FaReact />
          <div>
            <h3>React</h3>
            <p>UI Development</p>
          </div>
        </div>

        <div className="skill-box">
          <FaNodeJs />
          <div>
            <h3>Node.js</h3>
            <p>Backend Development</p>
          </div>
        </div>

        <div className="skill-box">
          <SiExpress />
          <div>
            <h3>Express</h3>
            <p>REST API</p>
          </div>
        </div>

        <div className="skill-box">
          <SiMongodb />
          <div>
            <h3>MongoDB</h3>
            <p>Database</p>
          </div>
        </div>

        <div className="skill-box">
          <FaGithub />
          <div>
            <h3>GitHub</h3>
            <p>Version Control</p>
          </div>
        </div>

        <div className="skill-box">
          <FaBootstrap />
          <div>
            <h3>Bootstrap</h3>
            <p>Responsive Design</p>
          </div>
        </div>

        <div className="skill-box">
          <SiTailwindcss />
          <div>
            <h3>Tailwind</h3>
            <p>UI Styling</p>
          </div>
        </div>

        <div className="skill-box">
          <FaWordpress />
          <div>
            <h3>WordPress</h3>
            <p>CMS Development</p>
          </div>
        </div>

        <div className="skill-box">
          <FaJoomla />
          <div>
            <h3>Joomla</h3>
            <p>CMS Development</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skill;