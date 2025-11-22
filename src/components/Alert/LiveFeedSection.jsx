import React from "react";
import "./LiveFeedSection.css";

const LiveFeedSection = ({
  cameraId,
  time,
  location,
  locationUrl,
  imagePlaceholder
}) => {
  return (
    <div className="footage-card">

      {/* TOP: CAMERA + TIME */}
      <div className="live-top">
        <div className="live-label">Camera Source</div>
        <div className="live-top-main">
          <span className="live-camera-name">{cameraId}</span>
        </div>
        <div className="live-timestamp">Captured: {time}</div>
      </div>

      {/* MIDDLE: VIDEO SNAPSHOT / FEED */}
      <div className="live-middle">
        <div className="live-video-box">
          <span className="live-video-placeholder">{imagePlaceholder}</span>
        </div>
      </div>

      {/* BOTTOM: LOCATION DETAILS */}
      <div className="live-bottom">
        <div className="live-location-block">
          <span className="live-location-label">Incident Location</span>
          <span className="live-location-text">{location}</span>
        </div>

        <a href={locationUrl} target="_blank" rel="noreferrer" className="live-map-link">
          View Map →
        </a>
      </div>
    </div>
  );
};

export default LiveFeedSection;
