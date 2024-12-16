import { React, useState } from "react";
// import profile_image from "./assets/4D42591A-0D00-4778-AE75-A5AF90570459.JPG";
import profile_image from "./assets/profile_image.png";
import { FaLinkedin, FaGithub, FaHandshake } from "react-icons/fa";

import "../index.css";
const containerStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto",
  marginTop: "50px",
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
    <div style={containerStyle}>
      <div>
        <div
          className="profile-container"
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
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
        <div
          className="social-links"
          style={{ display: "flex", gap: "3px", marginLeft: "25px" }}
        >
          <a
            href="https://www.linkedin.com/in/gabriela-fite-02aa64242/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "40px", color: "foreground" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gabbiF"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "40px" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://app.joinhandshake.com/profiles/33093754"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "45px" }}
          >
            <FaHandshake />
          </a>
        </div>
      </div>
      <p className="p-general">
        I am a Senior At Cornell University studying Computer Science. My minor
        is in Information Science with a Concentration in Data Science. My
        interest include Software Engineering, Machine Learning, Data Analytics,
        and Web Development. This website includes some of my recent projects,
        relevant work experience, and more information about me! Take a look
        around!
      </p>
    </div>
  );
};

export default AboutMe;
