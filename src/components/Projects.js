import React, { useState } from "react";
import scratch_logo from "./assets/scratch-logo.png";
import info3370 from "./assets/info3370.png";
import mental_health from "./assets/mental_health.png";
import server_image from "./assets/server_image.jpg";
import deja_brew from "./assets/deja_brew.png";
import bb_logo from "./assets/b_b_logo.webp";
import meter_image from "./assets/meter_image.jpg";
import nlp_image from "./assets/nlp_image.avif";

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
    },
    {
      id: 2,
      categories: ["academic", "OCaml"],
      title: "O-Scratch",
      image: scratch_logo,
    },
    {
      id: 3,
      categories: ["python"],
      title: "Deja Brew",
      image: deja_brew,
    },
    {
      id: 4,
      categories: ["internship", "python", "CSS", "HTML"],
      title: "Server Inventory System",
      image: server_image,
    },
    {
      id: 5,
      categories: ["internship", "python"],
      title: "SAP Automation System",
      image: meter_image,
    },
    {
      id: 6,
      categories: ["academic", "R"],
      title: "Data Analysis Project",
      image: info3370,
    },
    {
      id: 7,
      categories: ["academic", "python", "HTML", "CSS", "AI"],
      title: "Byte Bites",
      image: bb_logo,
    },
    {
      id: 8,
      categories: ["academic", "python", "AI"],
      title: "BERT Modeling",
      image: nlp_image,
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
        style={{ marginBottom: "20px", textAlign: "center" }}
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "60px",
        }}
      >
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              position: "relative",
              height: "270px",
              width: "240px",
              justifyContent: "space-between",
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
                width: "80%",
                height: "120px",
                objectFit: "cover",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
            <p>{card.description}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
