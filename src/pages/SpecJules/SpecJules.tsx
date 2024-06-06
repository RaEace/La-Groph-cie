import SpecTitle from "../../components/SpecTitle/SpecTitle";
import corsica from "../../assets/images/corsica-svg.svg";
import "./SpecJules.css";
import SpecBuilder from "../../components/SpecBuilder/SpecBuilder";

const SpecJules: React.FC = () => {
  return (
    <div className="jules-layout">
      <div className="spec-section">
        <SpecTitle title="JULES LAGNY" flag={corsica} />
        <div className="specs">
          <div className="size-specs">
            <SpecBuilder label="Taille" amount={180} metric="cm" />
            <SpecBuilder label="Poids de départ" amount={86.2} metric="kg" />
          </div>
          <div className="weight-specs">
            <SpecBuilder label="Poids max" amount={87} metric="kg" />
            <SpecBuilder label="Objectif" amount={78} metric="kg" color="red" />
          </div>
        </div>
      </div>
      <div className="spec-photo"></div>
    </div>
  );
};

export default SpecJules;
