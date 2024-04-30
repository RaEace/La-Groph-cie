// Home.tsx
import React from "react";
import "./Home.css";
import LandText from "../../components/LandText/LandText";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="land-page">
        <LandText />
      </div>
      <h1 className="small-title ">A</h1>
    </div>
  );
};

export default Home;
