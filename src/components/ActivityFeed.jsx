import React from "react";
import "../style/ActivityFeed.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityFeed = () => (
  <div className="activity-feed">
    <h3>Activity</h3>
    <p>3 appointment on this week</p>
    <div className="activity-chart">
      {days.map((day, idx) => (
        <div key={idx} className="activity-bar">
          <div className="bar primary"></div>
          <div className="bar secondary"></div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;