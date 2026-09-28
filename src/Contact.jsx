import "./contact.css";

import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-heading">
        <span>CONTACT ME</span>

        <h2>
          Let's <b>Connect</b>
        </h2>

        <p>Feel free to get in touch with me.</p>
      </div>

      <div className="contact-box">
        <a href="tel:+917034467318">
          <FaPhone />
          <span>+91 7034467318</span>
        </a>

        <a href="mailto:yourname@gmail.com">
          <FaEnvelope />
          <span>greenabaiju@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/greenabaiju"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;