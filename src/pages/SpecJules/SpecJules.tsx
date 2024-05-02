import SpecBuilder from "./SpecBuilder/SpecBuilder";
import "./SpecJules.css";

const SpecJules: React.FC = () => {
  return (
    <div className="jules-layout">
      <div className="title-section">
        <div className="nationality"></div>
        <h1>JULES LAGNY</h1>
      </div>
      <div className="spec-section">
        <div className="size-specs">
          <SpecBuilder label="Taille" amount={180} metric="cm" />
          <SpecBuilder label="Taille du sexe" amount={2} metric="cm" />
        </div>
        <div className="weight-specs">
          <SpecBuilder label="Poids de départ" amount={86.2} metric="kg" />
          <SpecBuilder label="Taille" amount={78} metric="kg" red />
        </div>
      </div>
    </div>
  );
};

export default SpecJules;
