import BetBar from "../../components/BetBar/BetBar";
import BetTitle from "../../components/BetTitle/BetTitle";
import "./Betting.css";

const Betting = () => {
  return (
    <div className="betting">
      <div className="title-section">
        <BetTitle />
      </div>
      <div className="bet-bar">
        <div className="bet-names-layout">
          <p className="bet-names-style">LAGNY</p>
          <p className="bet-names-style">MOURA</p>
        </div>
        <BetBar jules={40} thibault={130}/>
      </div>
      <div className="countdown-layout">
        99 : 99 : 99 : 99
      </div>
    </div>
  );
};

export default Betting;
