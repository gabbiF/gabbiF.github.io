import React from "react";
import profile_image from "./assets/4D42591A-0D00-4778-AE75-A5AF90570459.JPG";
import { FaLinkedin, FaGithub, FaHandshake } from "react-icons/fa";

import "../index.css";
const containerStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto",
};
const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <div>
        <div className="profile-container">
          <img
            src={profile_image}
            alt="Gabriela Fite"
            className="profile-image"
          />
        </div>
        <div
          className="social-links"
          style={{ display: "flex", gap: "0px", marginLeft: "25px" }}
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
        I am a Senior At Cornell University studying Computer Science. I am
        pursuing a Minor in Information Science with a Concentration in Data
        Science. My interest include Software Engineering, Machine Learning,
        Data Analytics, and Web Development. This website includes some of my
        recent project, relevant work experience, and some testimonials from
        past employers and colleagues. Take a look around!
      </p>
    </div>
  );
};

export default AboutMe;
