import "../stylesheets/Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <small className="footer__advise">*</small>
      <small className="footer__advise">
        Esta página puede tener contenido sensible basado en la serie Rick and
        Morty calificada para mayores de 18 años.
      </small>
      <small className="footer__copyright">Carmen Ramos Martínez</small>
      <small className="footer__copyright"> &copy; 2021 </small>
    </footer>
  );
}
export default Footer;
