import "./BetBar.css"

interface ProgressBarProps {
  thibault: number;
  jules: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ thibault, jules }) => {
  const totalValue = thibault + jules;
  const thibaultPercentage = (thibault / totalValue) * 100;
  const julesPercentage = (jules / totalValue) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-thibault" style={{ width: `${thibaultPercentage}%`}}>
        {thibaultPercentage.toFixed(2)} €
      </div>
      <div className="progress-bar-jules" style={{ width: `${julesPercentage}%`}}>
        {julesPercentage.toFixed(2)} €
      </div>
    </div>
  );
};

export default ProgressBar;

