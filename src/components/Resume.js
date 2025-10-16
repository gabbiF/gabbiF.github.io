import React from "react";
import resumefile from "./assets/Resume_GabrielaF2025.pdf";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <p className="p-title">My Resume</p>
      <div className="resume-viewer">
        <embed
          src={resumefile}
          type="application/pdf"
          width="100%"
          height="calc(100vh - 150px)"
        />
      </div>
      <div className="resume-download">
        <a
          href={resumefile}
          download="Gabriela_Fite_Resume.pdf"
          className="download-button"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
