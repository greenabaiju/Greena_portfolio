import "./footer.css";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logof">
        <span>Green</span>a Baiju
      </div>

      <p className="footerp">
        Full Stack Developer building modern and responsive web applications.
      </p>

      <div className="footers">
        <a href="https://github.com/greenabaiju" target="_blank"
              rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/greena-baiju" target="_blank"
              rel="noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="mailto:greenabaiju@gmail.com">
          <FaEnvelope />
        </a>

        <a href="tel:+917034467318">
          <FaPhone />
        </a>
      </div>

     

      <div className="footerb">
        <p>© 2026 Greena Baiju. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
