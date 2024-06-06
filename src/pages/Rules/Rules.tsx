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
          <div className="box">
            <div>1</div>
            <p>DU 1 ER MAI AU 1 ER SEPTEMBRE </p>
          </div>
          <div className="box">
            <div>2</div>
            <p>CELUI QUI PERD LE PLUS DE POIDS GAGNE </p>
          </div>
        </div>
        <div className="right-rules">
          <div className="box">
            <div>3</div>
            <p>CONTROLE DU POIDS CHAQUE SAMEDI MATIN</p>
          </div>
          <div className="box">
            <div>4</div>
            <p>QUE LE MEILLEUR GROS, OU LE MEILLEUR MAIGRE GAGNE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
