import React from "react";
import "./AiRecommendationsSection.css";

const AiRecommendationsSection = ({ suggestions = [] }) => {
  return (
    <div className="ai-panel">
      <div className="ai-panel-header">
        <h4>SRI Recommendations</h4>
        
      </div>

      <div className="suggestions-list">
        {suggestions.map((s, i) => (
          <div className="suggestion-item" key={i}>
            <span className="suggestion-badge">{i + 1}</span>
            <span>{s}</span>    
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default AiRecommendationsSection;
