import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
  title: "Resume Builder",
  image: "/project7.png",
  description:
    "A responsive Resume Builder application that allows users to create, edit and manage professional resumes. Built using React.js, Material UI and REST API integration with json-server.",
  tags: ["React", "JavaScript", "Material UI", "REST API", "JSON Server"],
  live: "https://resume-builder-fe-pi.vercel.app/",
  github: "https://github.com/greenabaiju/resumeBuilder_fe",
  linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7521129242764496896/"
},
    {
  title: "Rentelle – Fashion Rental System",
  image: "/project6.png",
  description:
    "A responsive fashion rental website developed using React. It helps manage dress collections, inventory and customer records with separate user and admin features.",
  tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  live: "https://mini-project-rentelle.vercel.app/",
  github: "https://github.com/greenabaiju/MiniProject_Rentelle",
   linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7516828022801330179/"
},
    {
      title: "ShopNest – React E-commerce Website",
      image: "/project5.png",
      description:
        "A responsive React e-commerce website featuring dynamic products fetched from the Fake Store API, product categories, featured products and special offers.",
      tags: [
        "React",
        "JavaScript",
        "React Router",
        "REST API",
        "Fetch API",
        "CSS",
      ],
      live: "https://shopnest-react-fetch-api.vercel.app/",
      github: "https://github.com/greenabaiju/shopnest-react-fetch-api",
    },
    {
      title: "React Website",
      image: "/project4.png",
      description:
        "A modern React website built using reusable components and JSX. It demonstrates components, props, state, events and dynamic UI.",
      tags: ["React", "JavaScript", "CSS"],
      live: "https://react-website-bryusygbf-abcd-a874.vercel.app/",
      github: "https://github.com/greenabaiju/react_website.git",
    },
    {
      title: "Swiggy Homepage Clone",
      image: "/project1.png",
      description:
        "A responsive food delivery website clone developed using HTML5, CSS3 and Bootstrap 5.",
      tags: ["HTML", "CSS", "Bootstrap"],
      live: "https://greenabaiju.github.io/swiggy-homepage-clone/",
      github: "https://github.com/greenabaiju/swiggy-homepage-clone.git",
      linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7492267012891742211/",
    },
    {
      title: "HTML & CSS Project",
      image: "/project2.png",
      description:
        "A modern web interface created using HTML5 and CSS3 with responsive layouts, animations and hover effects.",
      tags: ["HTML", "CSS", "Animation"],
      live: "https://greenabaiju.github.io/Task-html-css-animation/",
      github: "https://github.com/greenabaiju/Task-html-css-animation",
      linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7482632450255552514/",
    },
    {
      title: "CSS Learning Website",
      image: "/project3.png",
      description:
        "A responsive educational website explaining CSS fundamentals, selectors, styling, Flexbox and the CSS Box Model.",
      tags: ["HTML", "CSS", "Flexbox"],
      live: "https://greenabaiju.github.io/CSS_website/index.html",
      github: "https://github.com/greenabaiju/CSS_website.git",
      linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7478710474738663424/",
    },
  ];

  return (
    <section className="projects">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaLink />
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>

                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
