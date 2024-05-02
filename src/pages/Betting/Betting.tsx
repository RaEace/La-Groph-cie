import BetBar from "../../components/BetBar/BetBar";
import BetTitle from "../../components/BetTitle/BetTitle";
import TimeCountdown from "../../components/TimeCountdown/TimeCountdown";
import "./Betting.css";

const Betting = () => {
  const finalDate = new Date('2024-09-01T23:59:59');

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
        <TimeCountdown finalDate={finalDate}/>
      </div>
    </div>
  );
};

export default Betting;
