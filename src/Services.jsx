import React from "react";
import "./service.css";

const Services = () => {
  return (
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

          <span className="tags">HTML </span>
          <span className="tags">CSS </span>
          <span className="tags">Javascript </span>
          <span className="tags">React </span>
        </div>

        <div className="servicec card-2">
          <span className="number">02</span>

          <h3>Backend Development</h3>

          <p>
            I develop backend applications and APIs using Node.js, Express and
            MongoDB.
          </p>
          <span className="tags"> Node.js </span>
          <span className="tags">Express </span>
          <span className="tags">REST API </span>
          <span className="tags">MongoDB</span>
        </div>

        <div className="servicec card-3">
          <span className="number">03</span>

          <h3>Full Stack Development</h3>

          <p>I build complete web applications using the MERN stack.</p>
          <span className="tags">HTML </span>
          <span className="tags">CSS </span>
          <span className="tags">Javascript </span>
          <span className="tags">React </span>
          <span className="tags"> Node.js </span>
          <span className="tags">Express </span>
          <span className="tags">REST API </span>
          <span className="tags">MongoDB</span>
        </div>

        <div className="servicec card-4">
          <span className="number">04</span>

          <h3>WordPress Development</h3>

          <p>
            I create and customize responsive WordPress websites for businesses
            and personal websites.
          </p>

          <span className="tags">Wordpress </span>
          <span className="tags">CSS </span>
          <span className="tags">HTML </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
