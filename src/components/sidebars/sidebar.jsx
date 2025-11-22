import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>SRI</h2>
        <p>Command Center</p>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <span>📌</span>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <span>☐</span>
          <span>Alerts</span>
        </div>
        <div className="nav-item">
          <span>☒</span>
          <span>Live Evidence</span>
        </div>
        <div className="nav-item">
          <span>👍</span>
          <span>Upload & Summarize</span>
        </div>
        <div className="nav-item">
          <span>📌</span>
          <span>Missing / Wanted Person</span>
        </div>
        <div className="nav-item">
          <span>📌</span>
          <span>Video Feeds</span>
        </div>
        <div className="nav-item">
          <span>🟩</span>
          <span>Weapons</span>
        </div>
        <div className="nav-item">
          <span>🟩</span>
          <span>Suspicious Bags</span>
        </div>
        <div className="nav-item">
          <span>✔</span>
          <span>Loitering</span>
        </div>
        <div className="nav-item">
          <span>🔗</span>
          <span>Anomalies</span>
        </div>
        <div className="nav-item">
          <span>📅</span>
          <span>Cases</span>
        </div>
        <div className="nav-item">
          <span>📅</span>
          <span>Teams</span>
        </div>
        <div className="nav-item">
          <span>📈</span>
          <span>Reports</span>
        </div>
        <div className="nav-item">
          <span>📈</span>
          <span>Settings</span>
        </div>
      </nav>
      
      <div className="sidebar-status">
        <div className="status-online">• System Online</div>
      </div>
    </div>
  );
};

export default Sidebar;