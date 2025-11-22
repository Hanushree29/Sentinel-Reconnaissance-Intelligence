import React from "react";
import "./AlertSummarySection.css";

const AlertSummarySection = ({ notificationText }) => {
  return (
    <div className="alert-main-card">
      <h3 className="alert-title">Situation Overview</h3>

      <p className="alert-description">
        {notificationText}
      </p>
    </div>
  );
};

export default AlertSummarySection;
