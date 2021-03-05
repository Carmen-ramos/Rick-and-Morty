import logo from "../images/logoheadermobile.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Ricky and Morty header image"
      />
      <h1>Rick and Morty</h1>
    </header>
  );
}

export default Header;
