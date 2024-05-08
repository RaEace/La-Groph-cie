import React from "react";
import Betting from "../Betting/Betting";
import Landing from "../Landing/Landing";
import "./Home.css";
import SpecJules from "../SpecJules/SpecJules";
import SpecThibault from "../SpecThibault/SpecThibault";
import Rules from "../Rules/Rules";
import Opinions from "../Opinions/Opinions";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Landing />
      <Betting />
      <SpecJules />
      <SpecThibault />
      <Rules />
      <Opinions />
      <Footer />
    </div>
  );
};

export default Home;
