import { useEffect, useState } from "react";
import "./TimeCountDown.css";
import { defaultDate } from "./types";
import { getDateElements } from "./utils";

interface TimeCountdownProps {
  finalDate: Date;
}

const CountDownPart: React.FC<{ text: string; value: number }> = ({
  text,
  value,
}) => {
  return (
    <div className="countdown-element-layout">
      <span className="countdown-value">{value}</span>
      <span className="countdown-text">{text.toUpperCase()}</span>
    </div>
  );
};

const CountdownSeparator: React.FC = () => {
  return (
    <div className="countdown-element-layout">
      <span className="countdown-value">:</span>
      <span className="countdown-text">
        <span className="hidden-content">x</span>
      </span>
    </div>
  );
};

const TimeCountdown: React.FC<TimeCountdownProps> = ({ finalDate }) => {
  const [dateElements, setDateElements] = useState(defaultDate);
  const updatedCountdown = getDateElements(finalDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateElements(updatedCountdown);
    }, 1000);

    return () => clearInterval(interval);
  }, [updatedCountdown]);

  return (
    <div className="countdown-layout">
      <CountDownPart text="jours" value={dateElements.days} />
      <CountdownSeparator />
      <CountDownPart text="heures" value={dateElements.hours} />
      <CountdownSeparator />
      <CountDownPart text="minutes" value={dateElements.minutes} />
      <CountdownSeparator />
      <CountDownPart text="secondes" value={dateElements.seconds} />
    </div>
  );
};

export default TimeCountdown;
