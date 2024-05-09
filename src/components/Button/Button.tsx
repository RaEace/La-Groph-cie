import "./Button.css";

interface ButtonProps {
  text: string;
  style?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick }) => {
  return (
    <button className={`btn ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
