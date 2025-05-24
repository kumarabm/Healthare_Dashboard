import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../style/DashboardMainContent.css";

const DashboardMainContent = () => (
  <div className="dashboard-main">
    <div className="dashboard-top">
      <AnatomySection />
      <HealthStatusCards />
    </div>
    <CalendarView />
    <UpcomingSchedule />
    <ActivityFeed />
  </div>
);

export default DashboardMainContent;