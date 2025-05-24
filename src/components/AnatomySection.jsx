import React from "react";
import "../styles/AnatomySection.css";

const AnatomySection = () => (
  <div className="anatomy-section">
    <img src="/assets/anatomy.png" alt="Human Body" className="anatomy-img" />
    <div className="status-tag heart">Healthy Heart</div>
    <div className="status-tag leg">Healthy Leg</div>
  </div>
);

export default AnatomySection;