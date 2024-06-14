import "./OpinionElement.css";

interface OpinionElementProps {
  text: string;
  name: string;
  photo: string;
  title: string;
}

const OpinionElement: React.FC<OpinionElementProps> = ({
  text,
  name,
  title,
  photo,
}) => {
  return (
    <div className="opinion-element-block">
      <div className="opinion-element-text">"{text}"</div>
      <div className="opinion-element-name-title">
        <div className="opinion-element-photo">
          <img src={photo} />
        </div>
        <div>
          <div className="opinion-element-name">{name.toLocaleUpperCase()}</div>
          <div className="opinion-element-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default OpinionElement;
