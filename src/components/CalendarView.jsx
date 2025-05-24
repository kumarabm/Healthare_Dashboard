import React from "react";
import { calendarData, appointments } from "../data/calendar";
import "../styles/CalendarView.css";

const CalendarView = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <h3>October 2021</h3>
      {/* Arrows can be added here */}
    </div>
    <div className="calendar-grid">
      {calendarData.map((day) => (
        <div className="calendar-day" key={day.date}>
          <div className="date">{day.label}</div>
          {day.slots.map((slot) => (
            <div key={slot} className="time-slot">{slot}</div>
          ))}
        </div>
      ))}
    </div>
    <div className="appointment-cards">
      {appointments.map(({ title, time, doctor }) => (
        <div className="appointment-card" key={title}>
          <h4>{title}</h4>
          <p>{time}</p>
          <p>{doctor}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarView;
