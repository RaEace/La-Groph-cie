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
          <div className="shape1">prout</div>
          <div className="shape2">prout</div>
        </div>
        <div className="right-rules">
          <div className="shape3">prout</div>
          <div className="shape4">prout</div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
