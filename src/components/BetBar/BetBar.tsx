interface BetBarProps {
  completed: number;
}

const BetBar: React.FC<BetBarProps> = ({ completed }) => {
  return (
    <div className="bet-bar">
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};
export default BetBar;
