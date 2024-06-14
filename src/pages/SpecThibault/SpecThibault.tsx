import portugal from "../../assets/images/PortugalFlag.png";
import SpecBuilder from "../../components/SpecBuilder/SpecBuilder";
import SpecTitle from "../../components/SpecTitle/SpecTitle";
import tibo from "../../assets/images/tibo.png";
import "./SpecThibault.css";

const SpecThibault: React.FC = () => {
  return (
    <div className="thibault-layout">
      <img className="spec-photo" src={tibo} />
      <div className="spec-section">
        <SpecTitle title="THIBAULT MOURA" flag={portugal} />
        <div className="specs">
          <div className="size-specs">
            <SpecBuilder label="Taille" amount={183} metric="cm" />
            <SpecBuilder label="Poids de départ" amount={92} metric="kg" />
          </div>
          <div className="weight-specs">
            <SpecBuilder label="Taille du" amount={96} metric="kg" />
            <SpecBuilder label="Objectif" amount={80} metric="kg" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecThibault;
