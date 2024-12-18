import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  var icon = "▼";
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    icon = "▲";
  };
  const span_style = {
    position: "absolute",
    right: "0",
    alignItems: "right",
    paddingRight: "80px",
  };

  const imageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} alt="icon" style={imageStyle} />
            <span>{item.title}</span>
            <span style={span_style}>{item.time}</span>
            <span className="icon">{icon}</span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
