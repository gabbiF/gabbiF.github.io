import { React, useState } from "react";
// import profile_image from "./assets/4D42591A-0D00-4778-AE75-A5AF90570459.JPG";
import profile_image from "./assets/profile2.png";
import { FaLinkedin, FaGithub, FaHandshake } from "react-icons/fa";

import "../index.css";
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "40px",
  maxWidth: "1200px",
  margin: "0 auto",
  marginTop: "50px",
  padding: "0 20px",
};
const AboutMe = () => {
  const [sparkles, setSparkles] = useState([]);

  const handleImageClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const sparkleId = Date.now();
    setSparkles((prev) => [...prev, { id: sparkleId, x, y }]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkleId));
    }, 1000);
  };

  return (
    <div className="about-container">
      <div style={containerStyle}>
        <div className="about-left">
          <div
            className="profile-container"
            style={{
              position: "relative",
              display: "inline-block",
              cursor: "pointer",
              marginBottom: "20px",
            }}
            onClick={handleImageClick}
          >
            <img src={profile_image} className="profile-image" alt="Profile" />
            {sparkles.map((sparkle) => (
              <svg
                key={sparkle.id}
                className="sparkle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: "absolute",
                  left: sparkle.x - 12,
                  top: sparkle.y - 12,
                  width: "24px",
                  height: "24px",
                  pointerEvents: "none",
                }}
              >
                <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" />
              </svg>
            ))}
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/gabriela-fite-02aa64242/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gabbiF"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://cornell.joinhandshake.com/profiles/szx7jc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Handshake"
            >
              <FaHandshake />
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <h3 className="about-title">About Me</h3>
            <p className="about-description">
              I am a Masters of Engineering student at Cornell University
              studying Computer Science. My concentration is in Machine Learning
              and Artifical Intelligence. I also hold a BS in Computer Science
              with a minor in Data Science.
            </p>

            <div className="about-interests">
              <h4>My Interests</h4>
              <div className="interest-tags">
                <span className="interest-tag">Software Engineering</span>
                <span className="interest-tag">Machine Learning</span>
                <span className="interest-tag">Data Analytics</span>
                <span className="interest-tag">Web Development</span>
                <span className="interest-tag">Artificial Intelligence</span>
                <span className="interest-tag">NLP</span>
                <span className="interest-tag">Full Stack Development</span>
              </div>
            </div>

            <p className="about-description">
              This website showcases some of my recent projects, relevant work
              experience, and more information about me! Take a look around and
              feel free to reach out if you'd like to connect or collaborate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
