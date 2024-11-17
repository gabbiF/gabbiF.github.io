// Navbar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import '../../index.css'


function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;