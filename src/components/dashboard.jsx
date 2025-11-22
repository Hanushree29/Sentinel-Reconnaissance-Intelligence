import React, { useState } from 'react';
import AlertBox from './Alert/AlertBox';
import './dashboard.css';

const Dashboard = () => {
  const [heatmapMode, setHeatmapMode] = useState('real-time');
  const [videoMode, setVideoMode] = useState('single');
  const [aiMode, setAiMode] = useState('live');

  const handleApprove = () => {
    console.log('Actions approved');
  };

  const handleReject = () => {
    console.log('Actions rejected');
  };

  const handleExecute = () => {
    console.log('Response executed');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Sentinel Reconnaissance Intelligence</h1>
      </header>

      {/* Alert Box Component */}
      <AlertBox
        location="Downtown Financial District"
        issue="Criminal Activity Spotted"
        issueType="critical"
        imagePlaceholder="Live Feed"
        suggestions={[
          "Dispatch nearest patrol unit",
          "Activate nearby surveillance drones",
          "Alert local law enforcement",
          "Monitor suspect movement patterns"
        ]}
        onApprove={handleApprove}
        onReject={handleReject}
        onExecute={handleExecute}
      />

      {/* Main Analytics Section */}
      <div className="analytics-main">
        
        {/* A. Live AI Insights Panel */}
        <div className="dashboard-section">
          <h3>Live AI Insights Panel</h3>
          <div className="insights-grid">
            
            {/* Object Detection Stats */}
            <div className="insight-card">
              <h4>Object Detection</h4>
              <div className="detection-stats">
                <div className="stat-item">
                  <span className="stat-label">Weapons Detected</span>
                  <span className="stat-value critical">12</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Suspicious Items</span>
                  <span className="stat-value warning">8</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Vehicles of Interest</span>
                  <span className="stat-value">15</span>
                </div>
              </div>
            </div>

            {/* Facial Recognition */}
            <div className="insight-card">
              <h4>Facial Recognition</h4>
              <div className="recognition-stats">
                <div className="match-item high-priority">
                  <span className="match-name">John Doe</span>
                  <span className="match-status wanted">Wanted</span>
                </div>
                <div className="match-item medium-priority">
                  <span className="match-name">Jane Smith</span>
                  <span className="match-status watchlist">Watchlist</span>
                </div>
                <div className="match-item">
                  <span className="match-name">Robert Brown</span>
                  <span className="match-status known">Known Associate</span>
                </div>
              </div>
            </div>

            {/* Behavior Detection */}
            <div className="insight-card">
              <h4>Behavior Analytics</h4>
              <div className="behavior-stats">
                <div className="behavior-item">
                  <span className="behavior-type">Loitering</span>
                  <span className="behavior-count">23</span>
                </div>
                <div className="behavior-item">
                  <span className="behavior-type">Running</span>
                  <span className="behavior-count">17</span>
                </div>
                <div className="behavior-item">
                  <span className="behavior-type">Abnormal Posture</span>
                  <span className="behavior-count">9</span>
                </div>
                <div className="behavior-item">
                  <span className="behavior-type">Aggressive Gestures</span>
                  <span className="behavior-count">14</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* B. Heatmaps Section */}
        <div className="dashboard-section">
          <h3>Threat Heatmaps</h3>
          <div className="heatmap-controls">
            <div className="mode-toggle">
              <button 
                className={heatmapMode === 'historical' ? 'active' : ''}
                onClick={() => setHeatmapMode('historical')}
              >
                Historical
              </button>
              <button 
                className={heatmapMode === 'real-time' ? 'active' : ''}
                onClick={() => setHeatmapMode('real-time')}
              >
                Real-time
              </button>
              <button 
                className={heatmapMode === 'predictive' ? 'active' : ''}
                onClick={() => setHeatmapMode('predictive')}
              >
                Predictive
              </button>
            </div>
          </div>
          <div className="heatmaps-grid">
            <div className="heatmap-card">
              <h4>Crime Density Heatmap</h4>
              <div className="advanced-heatmap">
                <div className="heatmap-container">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`heatmap-pixel intensity-${Math.floor(Math.random() * 5)}`}></div>
                  ))}
                </div>
                <div className="heatmap-legend">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                  <span>Critical</span>
                </div>
              </div>
            </div>
            
            <div className="heatmap-card">
              <h4>Movement Heatmap</h4>
              <div className="movement-stats">
                <div className="source-stats">
                  <div className="source-item">
                    <span>CCTV Coverage</span>
                    <span className="coverage high">92%</span>
                  </div>
                  <div className="source-item">
                    <span>Drone Patrols</span>
                    <span className="coverage medium">78%</span>
                  </div>
                  <div className="source-item">
                    <span>Body Cams</span>
                    <span className="coverage low">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C. Infographics & Graphs */}
        <div className="dashboard-section">
          <h3>Analytical Infographics</h3>
          <div className="infographics-grid">
            
            {/* Trendline Graph */}
            <div className="graph-card">
              <h4>Threat Frequency (24h)</h4>
              <div className="trendline-graph">
                <div className="graph-container">
                  {[30, 45, 60, 80, 65, 50, 40, 55, 70, 85, 90, 75].map((height, index) => (
                    <div 
                      key={index} 
                      className="graph-bar" 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="graph-labels">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="graph-card">
              <h4>Risk Classification</h4>
              <div className="pie-chart">
                <div className="pie-segment critical" style={{ '--percentage': '30%' }}></div>
                <div className="pie-segment high" style={{ '--percentage': '25%' }}></div>
                <div className="pie-segment medium" style={{ '--percentage': '35%' }}></div>
                <div className="pie-segment low" style={{ '--percentage': '10%' }}></div>
                <div className="pie-center">
                  <span className="pie-total">100%</span>
                </div>
              </div>
              <div className="pie-legend">
                <div className="legend-item critical">Critical</div>
                <div className="legend-item high">High</div>
                <div className="legend-item medium">Medium</div>
                <div className="legend-item low">Low</div>
              </div>
            </div>

            {/* Gauge Meters */}
            <div className="gauge-card">
              <h4>System Metrics</h4>
              <div className="gauges-container">
                <div className="gauge-item">
                  <div className="gauge-label">Anomaly Score</div>
                  <div className="gauge-meter high">
                    <div className="gauge-fill"></div>
                    <span className="gauge-value">78%</span>
                  </div>
                </div>
                <div className="gauge-item">
                  <div className="gauge-label">Confidence Level</div>
                  <div className="gauge-meter medium">
                    <div className="gauge-fill"></div>
                    <span className="gauge-value">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Video Stream Window */}
        <div className="dashboard-section">
          <h3>Live Video Stream</h3>
          <div className="video-controls">
            <div className="view-mode-toggle">
              <button 
                className={videoMode === 'single' ? 'active' : ''}
                onClick={() => setVideoMode('single')}
              >
                Single
              </button>
              <button 
                className={videoMode === 'split' ? 'active' : ''}
                onClick={() => setVideoMode('split')}
              >
                2x2 Split
              </button>
              <button 
                className={videoMode === 'dynamic' ? 'active' : ''}
                onClick={() => setVideoMode('dynamic')}
              >
                Dynamic
              </button>
            </div>
          </div>
          <div className={`video-container ${videoMode}`}>
            <div className="video-feed">
              <div className="video-overlay">
                <div className="bounding-box weapon"></div>
                <div className="detection-label">Firearm - 94%</div>
                <div className="face-tag">IDENTIFIED: John Doe</div>
                <div className="tracking-vector"></div>
              </div>
              <div className="video-placeholder">
                Live CCTV Feed - Downtown Central
              </div>
            </div>
            {videoMode !== 'single' && (
              <>
                <div className="video-feed">
                  <div className="video-placeholder">Drone Feed - Sector B</div>
                </div>
                <div className="video-feed">
                  <div className="video-placeholder">Body Cam - Patrol Unit 12</div>
                </div>
                <div className="video-feed">
                  <div className="video-placeholder">Traffic Cam - Main St</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 4. Footer Control Bar */}
        <footer className="control-footer">
          <div className="footer-controls">
            <div className="utility-buttons">
              <button className="utility-btn">Export Reports</button>
              <button className="utility-btn">Archive Footage</button>
              <button className="utility-btn">Case Assignment</button>
              <button className="utility-btn">View Logs</button>
            </div>
            
            <div className="ai-mode-toggle">
              <span>AI Mode:</span>
              <button 
                className={aiMode === 'live' ? 'active' : ''}
                onClick={() => setAiMode('live')}
              >
                Live
              </button>
              <button 
                className={aiMode === 'archive' ? 'active' : ''}
                onClick={() => setAiMode('archive')}
              >
                Archive Replay
              </button>
              <button 
                className={aiMode === 'predictive' ? 'active' : ''}
                onClick={() => setAiMode('predictive')}
              >
                Predictive Simulation
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;