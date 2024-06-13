import "./Rules.css";
import RulesTitle from "./components/RulesTitle/RulesTitle";

const Rules: React.FC = () => {
  return (
    <div className="rules">
      <div className="title-section">
        <RulesTitle />
      </div>
      <div className="rules-section">
        <div className="column-rules">
          <div className="box">
            <p>DU 1 ER MAI AU 1 ER SEPTEMBRE</p>
          </div>
          <div className="box">
            <p>CELUI QUI PERD LE PLUS DE POIDS GAGNE</p>
          </div>
        </div>
        <div className="column-rules">
          <div className="box">
            <p>CONTROLE DU POIDS CHAQUE SAMEDI MATIN</p>
          </div>
          <div className="box">
            <p>QUE LE MEILLEUR GROS (OU MAIGRE) GAGNE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
