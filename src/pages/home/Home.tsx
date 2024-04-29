// Home.tsx
import React from "react";
import "./Home.css";
import Background from "../../components/Background/Background";

const Home: React.FC = () => {
  return (
    <div>
      <div className="home">
        <Background />
        <div className="container">
          <h2>GROPHETIE 01: LAGNY VS MOURA</h2>
          <h1>LE COMBAT DES TITANS</h1>
          <p className="catch-phrase">
            Qui du gros Thibault ou du gros Jules sortira vainqueur de ce combat
            de poids lourds ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
