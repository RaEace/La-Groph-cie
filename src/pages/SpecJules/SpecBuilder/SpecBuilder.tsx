import "./SpecBuilder.css";

interface SpecBuilderProps {
  label: string;
  amount: number;
  metric: string;
  color?: string;
}

function getColor(color: string) {
  if (color === "red") {
    return "var(--red)";
  }
  return "var(--white)";
}
const SpecBuilder: React.FC<SpecBuilderProps> = ({
  label,
  amount,
  metric,
  color = "white",
}) => {
  return (
    <div className="spec-element-layout">
      <p className="spec-element-label">{label}</p>
      <p className="spec-element-value" style={{ color: getColor(color) }}>
        {amount}
        {metric}
      </p>
    </div>
  );
};

export default SpecBuilder;
