import React from "react";
import Betting from "../Betting/Betting";
import Landing from "../Landing/Landing";
import "./Home.css";
import SpecJules from "../SpecJules/SpecJules";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Landing />
      <Betting />
      <SpecJules />
    </div>
  );
};

export default Home;
