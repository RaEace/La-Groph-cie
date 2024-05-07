import "./SpecTitle.css";

interface SpecTitleProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flag: any;
}

const SpecTitle: React.FC<SpecTitleProps> = ({ title, flag }) => {
  const titlePart = title.split(" ");

  return (
    <div className="title-section">
      <img className="flag" src={flag} />
      <h1 className="title-layout">
        {titlePart.map((titleElement) => (
          <div key={titleElement}>{titleElement}</div>
        ))}
      </h1>
    </div>
  );
};

export default SpecTitle;
