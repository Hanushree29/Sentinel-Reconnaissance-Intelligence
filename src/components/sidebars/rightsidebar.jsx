import React from 'react';
import './rightsidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="live-feed-section">
        <h3>Live Feed</h3>
        <div className="timestamp">
          <div>10:42:21 AM</div>
          <div>Nov 21, 2023</div>
        </div>
        <div className="storage-info">
          <div>Storage</div>
          <div>2.4TB / 10TB</div>
        </div>
        <div className="live-indicator">LIVE</div>
      </div>

      <div className="alerts-section">
        <h3>Latest Alerts</h3>
        <div className="alert-item">
          <div className="alert-type">INCREME</div>
          <div className="alert-location">RRT</div>
          <div className="alert-time">Unknown</div>
        </div>
        <div className="alert-item">
          <div className="alert-type">PROBLEM</div>
          <div className="alert-location">RRT</div>
          <div className="alert-time">Unknown</div>
        </div>
        <div className="alert-item">
          <div className="alert-type">SIGN</div>
          <div className="alert-location"></div>
          <div className="alert-time"></div>
        </div>
      </div>

      <div className="alert-details-section">
        <div className="alert-detail-item">
          <div className="alert-header">
            <strong>MIDIWM</strong>
            <span>FRT CAM1</span>
          </div>
          <div className="alert-details">
            Detected at Unknown<br/>
            Unknown + .60637 pm
          </div>
          <div className="alert-actions">
            <button className="view-btn">View</button>
            <button className="mark-safe-btn">Mark Safe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;