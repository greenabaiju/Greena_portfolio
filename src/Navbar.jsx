import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="head">
      <h1 className="logo">
        <span>Green</span>a Baiju
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/service">My Expertise</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <a
        href="https://www.linkedin.com/in/greena-baiju/"
        target="_blank"
        rel="noreferrer"
        className="contact-btn"
      >
        Get in touch
      </a>
    </header>
  );
};

export default Navbar;