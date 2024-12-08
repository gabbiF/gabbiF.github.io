import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/ui/accordion";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import ResumePage from "./components/Resume";
import AboutMe from "./components/About";
import { ReactComponent as Icon } from "./components/wave.svg";

function App() {
  const accordionItems = [
    {
      title: "IT Internship Southern California Edison",
      time: "May 2024 - August 2024",
      content:
        "Interned in the Grid Transformation Office during the summer of 2024, my functional group was Netcomm and Advanced Metering Operations. Created scripts using Python and Visual Basic to automate processes done in SAP, which was the application that stored meter information. Produced programs that calculated KPIs for functional teams, saving team members several hours every week. Designed Power BI dashboards to analyze meter data. Developed pages and themes for GSAC (HTML, React, CSS, Shadcn, JavaScript), a site that hosted numerous Edison applications from different departments in Grid Service. ",
      index: 1,
    },
    {
      title: "IT Internship Southern California Edison",
      time: "May 2023 - August 2023",
      content:
        "Worked as an intern at the Grid Transformation Office. Reported to Grid Services Operations.Led the Server Inventory Manager Project, an application designed to store server information and perform server processes. This project used Python, Flask, SQL, MariaDB, Docker, JavaScript, HTML, and CSS to create a full-stack application. Moreover, I assisted my functional group with IT-related tasks such as creating documentation and tickets. ",
      index: 2,
    },
    {
      title: "Teaching Assistant Cornell Bowers CIS",
      time: "January 2024 - Present",
      content:
        "I work as a teaching assistant for both the INFO 3300 and INFO 2950 courses at Cornell. INFO 2950, Introduction to Data Science, is a course taught in R about the fundamentals of Data Science. As a teaching assistant, I teach students about data models, web-scraping, machine-learning algorithms, and other topics from the course. INFO 3300, Interactive Web Design, uses HTML, CSS, and JavaScript to create front-end designs. Moreover, this course teaches students about making interactive models to display their data and findings. My responsibilities include hosting office hours, grading assignments, and leading discussion sections. ",
      index: 3,
    },
    {
      title: "Administrative Assistance Cornell Cooperative Extension",
      time: "August 2024 - Present",
      content:
        "Assist administrators with creating reports, publishing events, and tracking participation. I made a procedure for polling participation across the counties where events are hosted and automatically calculating key performance indicators. My work reduces downtime since there is no manual calculation and it can be done asynchronously. Moreover, I also work on designs and visuals for administrator reports. Additionally, I update the Cornell Cooperative Extension website to include new events and provide resources for past events.",
      index: 4,
    },
  ];

  const reviews = [
    {
      title: "Ezra Cornell",
      description:
        "Gabriela Fite has attended my University for the last 3 years.",
    },
    { title: "John Snow", description: "We must protect the North!" },
    {
      title: "Uncle Ben",
      description: "With great power comes great responsibility",
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />

      {/* <Navbar /> */}
      <div className="gradient_background">
        <div className="home-container">
          <Icon className="background-svg" />
          <p className="p-primary">Welcome to my Website</p>
          <p className="p-secondary">My Name is</p>
          <p className="p-name">Gabriela Fite</p>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"></section>

                <section id="about">
                  <h2 className="section-title">About Me</h2>
                  <AboutMe />
                  {/* <div class="custom-shape-divider-bottom-1733625549">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill"
                      ></path>
                    </svg>
                  </div> */}
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
                <section id="testimonials">
                  <h2 className="section-title">Testimonials</h2>
                  <Reviews cards={reviews} />
                </section>
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
