import React from "react";
import "../index.css";
import cornell_grad from "./assets/cornell_eng3.jpg";
import cornell_pretty from "./assets/cornell_pretty.webp";
import high_school from "./assets/culver_image.jpg";

const educationData = [
  {
    institution: "Culver City High School",
    degree: "High School Diploma",
    year: "2017 - 2021",
    image: high_school,
    description:
      "Graduated with honors, focusing on Mathematics and Science. Participated in robotics and coding clubs.",
  },
  {
    institution: "Cornell University",
    degree: "Bachelors of Science in Computer Science",
    year: "2021 - 2025",
    image: cornell_pretty,
    description:
      "Studying Computer Science with a Minor in Information Science, focusing on Data Science and Software Engineering.",
  },
  {
    institution: "Cornell University",
    degree: "Masters of Engineering in Computer Science",
    year: "2025 - 2025",
    image: cornell_grad,
    description:
      "Concentration in Computer Science with emphasis in Artifical Intelligence and Machine Learning ",
  },
];

const Education = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-cover-image">
              <img src={item.image} alt={`Cover for ${item.title}`} />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.institution}</h3>
              <h4 className="timeline-degree">{item.degree}</h4>
              <p className="timeline-year">{item.year}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
            {index !== educationData.length - 1 && (
              <div className="timeline-connector" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
