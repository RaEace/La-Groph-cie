import "./Rules.css";
import RulesTitle from "./components/RulesTitle/RulesTitle";

const Rules: React.FC = () => {
  return (
    <div className="rules">
      <div className="title-section">
        <RulesTitle />
      </div>
      <div className="rules-section">
        <div className="left-rules">
          <div className="shape1">Du premier mai au premier septembre</div>
          <div className="shape2">Celui qui perd le plus de poids gagne</div>
        </div>
        <div className="right-rules">
          <div className="shape3">Controle du poids chaque samedi matin</div>
          <div className="shape4">Que le meilleurs gros (ou maigre) gagne</div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
