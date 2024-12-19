import React, { useState } from "react";
import scratch_logo from "./assets/scratch-logo.png";
import info3370 from "./assets/info3370.png";
import mental_health from "./assets/mental_health.png";
import server_image from "./assets/server_image.jpg";
import deja_brew from "./assets/deja_brew.png";
import bb_logo from "./assets/b_b_logo.webp";
import meter_image from "./assets/meter_image.jpg";
import nlp_image from "./assets/nlp_image.avif";
import info_report from "./assets/info_proj.pdf";
import info_report2 from "./assets/FinalProject.pdf";
import bert from "./assets/ps_4_bert_final.pdf";

import "./../index.css";

function Projects() {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const categories = [
    "all",
    "academic",
    "internship",
    "python",
    "java",
    "OCaml",
    "HTML",
    "CSS",
    "R",
    "AI",
  ];
  const buttonColors = {
    all: "#007bff",
    academic: "#28a745",
    internship: "#ffc107",
    python: "#17a2b8",
    java: "#e83e8c",
    R: "#6f42c1",
    OCaml: "#fd7e14",
    CSS: "#20c997",
    HTML: "#6610f2",
    AI: "#ffb6c1",
  };
  const cards = [
    {
      id: 1,
      categories: ["academic", "R"],
      title: "Mental Health Dashboard",
      image: mental_health,
      description: `Created a dashboard examining mental health data and 
      how specific attributes influenced reported cases of mental health disorders. Project was promised of a report that documented our findings
      and an interactive web page.
`,
      links: [
        {
          label: "Report",
          url: info_report,
        },
        // { label: "Dashboard", url: "https://example.com/dashboard" },
      ],
    },
    {
      id: 2,
      categories: ["academic", "OCaml"],
      title: "O-Scratch",
      image: scratch_logo,
      description: `Worked in a team to replicated the popular code-learning application using the functional 
      programming language OCaml. Created an user interface to move the Scratch cat icon around using sequences created with Ocaml 
      code blocks `,
      links: [
        { label: "Github", url: "https://github.com/gabbiF/OCaml_reupload" },
      ],
    },
    {
      id: 3,
      categories: ["python"],
      title: "Deja Brew",
      image: deja_brew,
      description: `Final app for the App Dev Hackathon. I worked on the backend portion of the application, setting up routes, backend functions
      and a database of drink information. App had a variety of different features, including an option to generate a drink that was selected based 
      on the drink preferences in your profile. 
`,
      links: [{ label: "Github", url: "https://github.com/gabbiF/DejaBrew" }],
    },
    {
      id: 4,
      categories: ["internship", "python", "CSS", "HTML"],
      title: "Server Inventory System",
      image: server_image,
      description: `Created an application that stored important server information and functions. App was dynamically updated using a database 
      created in phpMyAdmin. The frontend was created using HTML, CSS, and Javascript. My focus was the backend which was developed using SQL, 
      flask, and Python. 
`,
    },
    {
      id: 5,
      categories: ["internship", "python"],
      title: "SAP Automation System",
      image: meter_image,
      description: `Developed a pipeline from meter technican to SAP system. Process involved a form that was easily shareable 
      and contained all revelant meter information and metrics. Form then fed into a Python backend which utilized a Visual Basic script to 
      autopopulate the valid meter data to SAP. System reduced downtime, performing data validation and ingestion asychronously. 
`,
    },
    {
      id: 6,
      categories: ["academic", "R"],
      title: "Higher Education and Jobs Satisfaction Data Analysis",
      image: info3370,
      description: `My group investigated whether higher education correlated to higher job satisfaction. We used R to visualize our findings and
      deduce unexpected trends across different majors, degrees, and ethnic backgrounds. 
`,
      links: [
        {
          label: "Report",
          url: info_report2,
        },
      ],
    },
    {
      id: 7,
      categories: ["academic", "python", "HTML", "CSS", "AI"],
      title: "Byte Bites",
      image: bb_logo,
      description: `Developed and trained mutliple machine learning models to produce recipes given a set of ingredients. Additionally, I implemented 
      an image recognition model that my group pipelined into our final application. From sourcing the data to adding the final touches to the 
      frontend, my group worked to ensure Byte Bites impressed!
`,
      // links: [
      //   {
      //     label: "Repository",
      //     url: "https://example.com/mental-health-report",
      //   },
      // ],
    },
    {
      id: 8,
      categories: ["academic", "python", "AI"],
      title: "BERT Modeling",
      image: nlp_image,
      description: `Trained and tuned a DistilBERT model to classify poems into genres. Provided two alternative 
      classifiers to server as baselines for my model. Moreover, I performed experiements to determine where the DistilBERT 
      model performed the best and potential weak points. 
`,
      links: [
        { label: "Report", url: bert },
        { label: "Github", url: "https://github.com/gabbiF/ps4_bert" },
      ],
    },
  ];
  const handleFilterClick = (category) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prevCategories) => {
        if (prevCategories.includes("all")) {
          return prevCategories.filter((item) => item !== "all");
        } else {
          return prevCategories.includes(category)
            ? prevCategories.filter((item) => item !== category)
            : [...prevCategories, category];
        }
      });
    }
  };

  const filteredCards = selectedCategories.includes("all")
    ? cards
    : cards.filter((card) =>
        selectedCategories.some((category) =>
          card.categories.includes(category)
        )
      );

  return (
    <div>
      <div
        className="buttons"
        style={{ marginBottom: "20px", textAlign: "center", argin: "0 auto" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            style={{
              padding: "12px 25px",
              margin: "5px",
              borderRadius: "25px",
              backgroundColor: selectedCategories.includes(category)
                ? buttonColors[category]
                : "#f0f0f0",
              color: selectedCategories.includes(category) ? "#fff" : "#000",
              border: "1.5px solid black",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s, transform 0.3s",
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div
        className="card-container"
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        //   gap: "20px",
        //   width: "100%",
        //   boxSizing: "border-box",
        //   justifyContent: "space-between",
        //   columnGap: "20px",
        //   rowGap: "20px",
        // }}
      >
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              paddingBottom: "50px",
              textAlign: "center",
              position: "relative",
              height: "auto",
              width: "auto",
              alignItems: "stretch",
              justifyContent: "space-between",
              // justifyContent: "center",
              // width: "90%",
            }}
          >
            <h4>
              <b>
                <strong>{card.title}</strong>
              </b>
            </h4>
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "2px solid lightgrey",
              }}
            />
            <div className="tags" style={{ marginTop: "10px" }}>
              {card.categories.map((category) => (
                <span
                  key={category}
                  style={{
                    display: "inline-block",
                    backgroundColor: buttonColors[category],
                    color: "#fff",
                    borderRadius: "15px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    margin: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
            <p>{card.description}</p>
            <div className="card-buttons">
              {card.links?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
