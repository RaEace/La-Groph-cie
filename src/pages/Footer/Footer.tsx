import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-logo" />
      <div className="footer-menu">
        <div className="footer-pages">
          <div className="footer-page">
            <p>LES COMBATTANTS</p>
            <p>LES EXPERTS</p>
            <p>LES PARIS</p>
          </div>
          <div className="footer-page">
            <p>LES REGLES</p>
            <p>CONDITION D'UTILISATION</p>
            <p>CONDITIONS DE VENTES</p>
          </div>
          <div className="footer-page">
            <p>POURQUOI</p>
            <p>TU LIS</p>
            <p>LE FOOTER ?</p>
          </div>
        </div>
        <div className="footer-text">
          <p>
            Attention : Parier sur l'issue de la compétition 'Thibaut Moura' est
            une entreprise risquée qui peut entraîner une perte totale de votre
            capital. Les paris comportent des risques financiers, et il est
            important de se rappeler que les parieurs sont les seuls maîtres de
            leurs investissements. En aucun cas, les organisateurs de cette
            compétition ne peuvent être tenus responsables des pertes encourues
            par les parieurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
