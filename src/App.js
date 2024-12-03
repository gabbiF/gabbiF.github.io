// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/ui/accordion";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";

<link
  href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
  rel="stylesheet"
></link>;

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const accordionItems = [
    {
      title: "IT Internship Southern California Edison",
      content: "This is the content for Section 1.",
    },
    {
      title: "IT Internship Southern California Edison",
      content: "This is the content for Section 2.",
    },
    {
      title: "Teaching Assistant Cornell Bowers CIS",
      content: "This is the content for Section 3.",
    },
    {
      title: "Administrative Assistance Cornell Cooperative Extension",
      content: "Blah",
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
      <div className="gradient_background">
        <section id="home">
          <div>
            <p className="p-primary">Welcome to my Website</p>
            <p className="p-secondary">My Name is</p>
            <p className="p-name">Gabriela Fite</p>
          </div>
        </section>
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <p className="p-general">
            I am a Senior At Cornell University studying Computer Science. I am
            pursuing a Minor in Information Science with a Concentration in Data
            Science. My interest include Software Engineering, Machine Learning,
            Data Analytics, and Web Development. This website includes some of
            my recent project, revelevant work experience and some testimonials
            from past employeers and colleagues. Take a look around!
          </p>
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
        <section id="resume"></section>
      </div>
    </BrowserRouter>
  );
}

export default App;
