import React from "react";
import { healthStatus } from "../data/healthStatus";
import "../styles/HealthStatusCards.css";

const HealthStatusCards = () => (
  <div className="health-cards">
    {healthStatus.map(({ organ, status, date, color }) => (
      <div className="health-card" key={organ} style={{ borderColor: color }}>
        <h4>{organ}</h4>
        <p>{date}</p>
        <div className="status-bar" style={{ backgroundColor: color }}></div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;