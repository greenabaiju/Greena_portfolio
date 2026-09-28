import "./experience.css";

const Experience=()=> {
  return (
    <section className="experience" id="experience">
      <div className="heading">
        <span>MY JOURNEY</span>

        <h2>
          Experience <b>& Education</b>
        </h2>

        <p>My professional experience and academic background.</p>
      </div>

      <div className="experienceg">
        <div className="boxe">
          <h3>Experience</h3>

          <div className="carde">
            <span>2026 - Present</span>

            <h4>Fullstack Intern</h4>

            <h5>Luminar Technolab</h5>

            <p>
              Full Stack Web Development using React, Node.js, Express and
              MongoDB.
            </p>
          </div>

          <div className="carde">
            <span>2020 - 2024</span>

            <h4>Web Designer</h4>

            <h5>KELTRON · Kerala</h5>

            <p>
              WordPress and Joomla website development, maintenance, SEO and
              responsive design.
            </p>
          </div>
        </div>

        <div className="boxe">
          <h3>Education</h3>

          <div className="carde">
            <span>2022 - 2024</span>

            <h4>Master of Science in Computer Science</h4>

            <h5>Kerala University</h5>

            <p>Postgraduate studies in Computer Science.</p>
          </div>

          <div className="carde">
            <span>2017 - 2020</span>

            <h4>Bachelor of Science in Computer Science</h4>

            <h5>Kerala University</h5>

            <p>Undergraduate studies in Computer Science.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
