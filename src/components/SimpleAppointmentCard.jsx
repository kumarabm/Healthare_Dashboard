import React from "react";
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="simple-appointment-card">
    <div className="title">{title}</div>
    <div className="time">{time}</div>
    <div className="icon">{icon}</div>
  </div>
);

export default SimpleAppointmentCard;