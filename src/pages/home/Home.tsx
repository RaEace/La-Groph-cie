import React from "react";
import Betting from "../Betting/Betting";
// import Landing from "../Landing/Landing";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* <Landing /> */}
      <Betting />
    </div>
  );
};

export default Home;
