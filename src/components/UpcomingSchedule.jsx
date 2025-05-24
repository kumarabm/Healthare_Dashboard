import React from "react";
import { upcoming } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    {Object.entries(upcoming).map(([day, appointments]) => (
      <div key={day} className="schedule-day">
        <h4>{day}</h4>
        <div className="schedule-cards">
          {appointments.map((appt) => (
            <SimpleAppointmentCard key={appt.title} {...appt} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
