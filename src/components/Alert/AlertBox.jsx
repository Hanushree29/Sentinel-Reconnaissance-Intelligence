import React from "react";
import "./AlertBox.css";

import LiveFeedSection from "./LiveFeedSection";
import AlertSummarySection from "./AlertSummarySection";
import AiRecommendationsSection from "./AiRecommendationsSection";

const AlertBox = ({
  notificationText = "NSG WATCHTOWER has detected an abnormal crowd surge pattern. Verify on-ground situation and prepare QRT deployment if risk is confirmedNSG WATCHTOWER has detected an abnormal crowd surge pattern. Verify on-ground situation and prepare QRT deployment if risk is confirmed.",
  metaText = "2 mins ago • ID: NSG-EM-4027",
  cameraId = "Perimeter Cam – Gate 03",
  time = "  15:03 IST",
  location = "Sector Delta • Financial District",
  locationUrl = "#",
  imagePlaceholder = "Live Feed",
  suggestions = [
    "Cross-verify density using nearby NSG cameras and drones.",
    "Alert on-ground QRT to be on standby near Gate 03.",
    "Enable auto density tracking for this grid for the next 30 mins."
  ],
  onDispatch,
  onViewVideo,
  onFalsePositive
}) => {
  return (
    <div className="alert-box">
      {/* FULL WIDTH NSG HEADER */}
      <div className="alert-header">
        <div className="header-left">
          <div className="header-alert-icon">!</div>
          <div className="header-text-block">
            <div className="header-title">NSG Crowd Anomaly</div>
           
          </div>
        </div>
        <div className="header-right">
          <span className="header-live-pill">LIVE</span>
          <span className="header-dot" />
          <span className="alert-meta-inline">{metaText}</span>
        </div>
      </div>

      <div className="alert-body">
        {/* 3-COLUMN LAYOUT */}
        <div className="alert-layout-3">
          {/* LEFT : LIVE FEED + CAMERA + LOCATION */}
          <div className="alert-left">
            <LiveFeedSection
              cameraId={cameraId}
              time={time}
              location={location}
              locationUrl={locationUrl}
              imagePlaceholder={imagePlaceholder}
            />
          </div>

          {/* MIDDLE : ALERT SUMMARY */}
          <div className="alert-middle">
            <AlertSummarySection notificationText={notificationText} />
          </div>

          {/* RIGHT : AI RECOMMENDATIONS */}
          <div className="alert-right">
            <AiRecommendationsSection suggestions={suggestions} />
          </div>
        </div>

        {/* FOOTER : COMMAND BUTTONS */}
        <div className="alert-footer">
          <button
            className="btn dispatch-btn"
            onClick={() => onDispatch && onDispatch()}
          >
            Allow
          </button>
          <button
            className="btn light-btn"
            onClick={() => onViewVideo && onViewVideo()}
          >
             View footage
          </button>
          <button
            className="btn ghost-btn"
            onClick={() => onFalsePositive && onFalsePositive()}
          >
            Mark as False Positive
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
