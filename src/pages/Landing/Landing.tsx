import Button from "../../components/Button/Button";
import LandText from "../../components/LandText/LandText";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="land-page">
      <div className="top-elements">
        <div className="top-logo" />
        <Button style="top-view-btn" text="PARIER" onClick={() => {}} />
      </div>
      <div className="land-layout">
        <LandText />
        <Button style="view-btn" text="VOIR LE MATCH" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Landing;
