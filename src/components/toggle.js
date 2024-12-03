import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
    document.body.classList.toggle("dark", !isToggled);
  };

  return (
    <div
      className={`toggle-container ${isToggled ? "toggled" : ""}`}
      onClick={toggleHandler}
    >
      <span className="background-icon">{isToggled ? "🌙" : "☀️"}</span>
      <div className="toggle-circle"></div>
    </div>
  );
};

export default Toggle;
