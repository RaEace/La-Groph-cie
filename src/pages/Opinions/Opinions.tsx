import "./Opinions.css";
import OpinionElement from "./components/OpinionElement/OpinionElement";
import OpinionsTitle from "./components/OpinionTitle/OpinionsTitle";
import mika from "../../assets/images/ExpertSN.png";
import slo from "../../assets/images/ExpertRL.png";
import clem from "../../assets/images/ExpertLol.png";

const Opinions: React.FC = () => {
  const mikaText =
    "Lagny a les connaissances, Moura avance a l'aveugle, la chance n'existe pas en nutrition";
  const clemText =
    "Moura a l'avantage de l'égo et il a la dalle, c'est malheuresement ce point qui va le conduire a sa défaite";
  const sloText =
    "Lagny semble plus fort mentalement, mais attention il faut se mefier, Moura est imprévisible!";
  return (
    <div className="opinions">
      <div className="title-layout">
        <OpinionsTitle />
      </div>
      <div className="advises">
        <OpinionElement
          text={mikaText}
          photo={mika}
          name="MIKAEL COLAS"
          title="Expert sport et nutrition"
        />
        <OpinionElement
          text={clemText}
          photo={clem}
          name="CLEMENT BORIE"
          title="Expert Lol"
        />
        <OpinionElement
          text={sloText}
          photo={slo}
          name="SLOAN NZHIE"
          title="Expert Rocket League"
        />
      </div>
    </div>
  );
};

export default Opinions;
