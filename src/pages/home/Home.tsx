import React from "react";
import Betting from "../Betting/Betting";
import Landing from "../Landing/Landing";
import "./Home.css";
import SpecJules from "../SpecJules/SpecJules";
import SpecThibault from "../SpecThibault/SpecThibault";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Landing />
      <Betting />
      <SpecJules />
      <SpecThibault />
    </div>
  );
};

export default Home;
