import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <header className="head">
      <h1 className="logo">
        <span>Green</span>a Baiju
      </h1>
      <nav>
        
          <a>Home</a>
         <a>About</a>
          <a href="#skills">Skills</a>
          <a href="#expertise">My Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="Greena_resume_n.pdf" target="_blank">Contact</a>
       
      </nav>
      <button>Contact</button>
    </header>
  );
};

export default Navbar;
