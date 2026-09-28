
import React from "react";
import "./service.css";

import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaWordpress
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">

      <div className="service-heading">
        <span>WHAT I DO</span>
        <h2>My <b>Expertise</b></h2>
        <p>I create modern and responsive web applications.</p>
      </div>

      <div className="service-grid">

        <div className="service-card">
          <FaCode />
          <span>01</span>
          <h3>Frontend Development</h3>
          <p>I create responsive websites using HTML, CSS, JavaScript and React.</p>
          <small>HTML · CSS · JavaScript · React</small>
        </div>

        <div className="service-card">
          <FaServer />
          <span>02</span>
          <h3>Backend Development</h3>
          <p>I develop backend applications using Node.js, Express and MongoDB.</p>
          <small>Node.js · Express · MongoDB</small>
        </div>

        <div className="service-card">
          <FaLayerGroup />
          <span>03</span>
          <h3>Full Stack Development</h3>
          <p>I build complete web applications using the MERN stack.</p>
          <small>React · Node.js · Express · MongoDB</small>
        </div>

        <div className="service-card">
          <FaWordpress />
          <span>04</span>
          <h3>WordPress Development</h3>
          <p>I create and customize responsive WordPress websites.</p>
          <small>WordPress · HTML · CSS</small>
        </div>

      </div>

    </section>
  );
};

export default Services;

