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
        <BetBar completed={50} />
      </div>
    </div>
  );
};

export default Betting;
