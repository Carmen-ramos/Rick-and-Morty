import logo from "../images/logo1.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Ricky and Morty header image"
      />
    </header>
  );
}

export default Header;
