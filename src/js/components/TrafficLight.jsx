import React, { useState } from "react";
import "../../styles/index.css"; // Asegúrate de tener este CSS

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light-container">
      <div
        className={`light red ${color === "red" ? "glow" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "glow" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;
