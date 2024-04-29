// Home.tsx
import React from "react";
import "./Background.css";

const Background: React.FC = () => {
  return (
    <div className="view">
      <div className="left">
        <div className="jules"></div>
      </div>
      <div className="divider"></div>
      <div className="right">
        <div className="thibault"></div>
      </div>
    </div>
  );
};

export default Background;
