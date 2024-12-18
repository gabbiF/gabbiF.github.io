import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/ui/accordion";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import ResumePage from "./components/Resume";
import Education from "./components/Education";
import AboutMe from "./components/About";
import { ReactComponent as Icon } from "./components/wave.svg";
import ed_logo from "./components/assets/so_cal_ed_logo.jpg";
import cce_logo from "./components/assets/cce_logo.png";
import bowers_logo from "./components/assets/bowers_logo.jpg";
// import cornell_pretty from "./components/assets/cornell_pretty.webp";
import cornell_logo from "./components/assets/cornell_logo.png";

function App() {
  const accordionItems = [
    {
      title: "IT Internship Southern California Edison",
      time: "May 2024 - August 2024",
      content:
        "Interned in the Grid Transformation Office during the summer of 2024, my functional group was Netcomm and Advanced Metering Operations. Created scripts using Python and Visual Basic to automate processes done in SAP, which was the application that stored meter information. Produced programs that calculated KPIs for functional teams, saving team members several hours every week. Designed Power BI dashboards to analyze meter data. Developed pages and themes for GSAC (HTML, React, CSS, Shadcn, JavaScript), a site that hosted numerous Edison applications from different departments in Grid Service. ",
      index: 1,
      image: ed_logo,
    },
    {
      title: "IT Internship Southern California Edison",
      time: "May 2023 - August 2023",
      content:
        "Worked as an intern at the Grid Transformation Office. Reported to Grid Services Operations.Led the Server Inventory Manager Project, an application designed to store server information and perform server processes. This project used Python, Flask, SQL, MariaDB, Docker, JavaScript, HTML, and CSS to create a full-stack application. Moreover, I assisted my functional group with IT-related tasks such as creating documentation and tickets. ",
      index: 2,
      image: ed_logo,
    },
    {
      title: "Teaching Assistant Cornell Bowers CIS",
      time: "January 2024 - Present",
      content:
        "I work as a teaching assistant for both the INFO 3300 and INFO 2950 courses at Cornell. INFO 2950, Introduction to Data Science, is a course taught in R about the fundamentals of Data Science. As a teaching assistant, I teach students about data models, web-scraping, machine-learning algorithms, and other topics from the course. INFO 3300, Interactive Web Design, uses HTML, CSS, and JavaScript to create front-end designs. Moreover, this course teaches students about making interactive models to display their data and findings. My responsibilities include hosting office hours, grading assignments, and leading discussion sections. ",
      index: 3,
      image: bowers_logo,
    },
    {
      title: "Administrative Assistance Cornell Cooperative Extension",
      time: "August 2024 - Present",
      content:
        "Assist administrators with creating reports, publishing events, and tracking participation. I made a procedure for polling participation across the counties where events are hosted and automatically calculating key performance indicators. My work reduces downtime since there is no manual calculation and it can be done asynchronously. Moreover, I also work on designs and visuals for administrator reports. Additionally, I update the Cornell Cooperative Extension website to include new events and provide resources for past events.",
      index: 4,
      image: cce_logo,
    },
  ];

  const reviews = [
    {
      title: "Ezra Cornell",
      image: cornell_logo,
      description:
        "Her full-stack coding skills, her drive to excel, and her communication skills are very rare amongst candidates, intern or full-time.",
    },
    {
      title: "John Snow",
      image: cornell_logo,
      description: "We must protect the North!",
    },
    {
      title: "Uncle Ben",
      image: cornell_logo,
      description: "With great power comes great responsibility",
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <div className="gradient_background">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <div className="home-container">
                    <Icon className="background-svg" />
                    <p className="p-primary">Welcome to my Website</p>
                    <p className="p-secondary">My Name is</p>
                    <p className="p-name">Gabriela Fite</p>
                  </div>
                </section>
                <section id="about">
                  <h2 className="section-title">About Me</h2>
                  <AboutMe />
                </section>
                <section id="education">
                  <h2 className="section-title">Education</h2>
                  <Education />
                </section>
                <section id="experience">
                  <h2 className="section-title">Experience</h2>
                  <div className="App">
                    <Accordion items={accordionItems} />
                  </div>
                </section>
                <section id="projects">
                  <h2 className="section-title">My Projects</h2>
                  <Projects />
                </section>
                {/* <section id="testimonials">
                  <h2 className="section-title">Testimonials</h2>
                  <Reviews cards={reviews} />
                </section> */}
              </>
            }
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
