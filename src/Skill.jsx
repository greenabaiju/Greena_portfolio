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

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
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
          <p>Structure of web pages</p>
        </div>
        <div className="skill">
          <div className="icon">
            <SiTailwindcss />
          </div>
          <h3>Tailwind</h3>
          <p>Structure of web pages</p>
        </div>
        <div className="skill">
          <div className="icon">
            <FaWordpress />
          </div>
          <h3>Wordpress</h3>
          <p>Structure of web pages</p>
        </div>
        <div className="skill">
          <div className="icon">
            <FaJoomla />
          </div>
          <h3>Joomla</h3>
          <p>Structure of web pages</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
