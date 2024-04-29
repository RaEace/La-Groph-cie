// Home.tsx
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
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

export default Home;
