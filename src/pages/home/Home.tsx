// Home.tsx
import React from "react";
import Betting from "../Betting/Betting";
import "./Home.css";
import Landing from "../Landing/Landing";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Landing />
      <Betting />
    </div>
  );
};

export default Home;
