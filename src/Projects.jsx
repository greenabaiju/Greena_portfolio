import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects">

      <div className="project-heading">
        <span>MY PROJECTS</span>

        <h2>
          My Recent <b>Work</b>
        </h2>

        <p>
          Explore some of my recent web development projects built using
          modern technologies and responsive designs.
        </p>
      </div>

      <div className="project-grid">

        <div className="project-card">

          <div className="project-image">
            <img src="/project4.png" alt="React Website" />
          </div>

          <div className="project-content">
            <span>01</span>

            <h3>React Website</h3>

            <p>
              A modern React website built using reusable components and JSX.
              It demonstrates components, props, state, events and dynamic UI.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
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
          </div>

        </div>


        <div className="project-card">

          <div className="project-image">
            <img src="/project1.png" alt="Swiggy Homepage Clone" />
          </div>

          <div className="project-content">
            <span>02</span>

            <h3>Swiggy Homepage Clone</h3>

            <p>
              A responsive food delivery website clone developed using HTML5,
              CSS3 and Bootstrap 5.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>

            <div className="project-links">
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
          </div>

        </div>


        <div className="project-card">

          <div className="project-image">
            <img src="/project2.png" alt="HTML CSS Project" />
          </div>

          <div className="project-content">
            <span>03</span>

            <h3>HTML & CSS Project</h3>

            <p>
              A modern web interface created using HTML5 and CSS3 with
              responsive layouts, animations and hover effects.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Animation</span>
            </div>

            <div className="project-links">
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

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7482632450255552514/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>


        <div className="project-card">

          <div className="project-image">
            <img src="/project3.png" alt="CSS Learning Website" />
          </div>

          <div className="project-content">
            <span>04</span>

            <h3>CSS Learning Website</h3>

            <p>
              A responsive educational website explaining CSS fundamentals,
              selectors, styling, Flexbox and the CSS Box Model.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Flexbox</span>
            </div>

            <div className="project-links">
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

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7478710474738663424/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;