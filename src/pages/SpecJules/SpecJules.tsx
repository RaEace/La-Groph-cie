import SpecTitle from "../../components/SpecTitle /SpecTitle";
import SpecBuilder from "./SpecBuilder/SpecBuilder";
import corsica from "../../assets/images/CorsicaFlag.png";
import "./SpecJules.css";

const SpecJules: React.FC = () => {
  return (
    <div className="jules-layout">
      <div className="spec-section">
        <SpecTitle title="JULES LAGNY" flag={corsica} />
        <div className="specs">
          <div className="size-specs">
            <SpecBuilder label="Taille" amount={180} metric="cm" />
            <SpecBuilder label="Taille du" amount={2} metric="cm" />
          </div>
          <div className="weight-specs">
            <SpecBuilder label="Poids de départ" amount={86.2} metric="kg" />
            <SpecBuilder label="Taille" amount={78} metric="kg" red />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecJules;
