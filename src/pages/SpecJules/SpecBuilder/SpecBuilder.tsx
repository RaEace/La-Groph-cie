interface SpecBuilderProps {
  label: string;
  amount: number;
  metric: string;
  red?: boolean;
}
const SpecBuilder: React.FC<SpecBuilderProps> = ({
  label,
  amount,
  metric,
  red = false,
}) => {
  const color = red ? "var(--red)" : "white";
  return (
    <div className="spec-element-layout">
      <p className="spec-element-label">{label}</p>
      <p className="spec-element-value" style={{ color: color }}>
        {amount} {metric}
      </p>
    </div>
  );
};

export default SpecBuilder;
