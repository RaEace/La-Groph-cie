// Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-light-gray">
      <div className="max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-bright-orange mb-4">
          La Grophécie
        </h1>
        <p className="text-dark-blue italic mb-6">Expect the unexpected</p>
        <p className="text-black text-lg">
          Prenez place dans le concours le moins palpitant (claqué) de votre
          existence, et placez vos espoirs et vos rêves (en euro), sur le gros
          qui finira le moins gros. deadline le 1er septembre 2024.
        </p>
      </div>
    </div>
  );
};

export default Home;
