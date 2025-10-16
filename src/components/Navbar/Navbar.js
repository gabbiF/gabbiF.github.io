// Navbar.js
import React from "react";
// import { Link } from 'react-router-dom';
import "../../index.css";
import Toggle from "./../toggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    color: "hsl(var(--foreground))",
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
    display: "flex",
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav>
      <ul>
        <li style={{}}>
          <Toggle />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("education");
            }}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li className="resume">
          <Link to="/resume" style={linkStyle}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
