import "./BetTitle.css";

const BetTitle = () => {
  return (
    <h1 className="bet-title">
      <p className="bet-title-element">LES PARIS SUR</p>
      <p className="bet-title-element">
        LE <span className="red-word">MATCH</span>
      </p>
    </h1>
  );
};

export default BetTitle;
