import notfound from "../images/notfound.jpg";
import photo from "../images/imgfy.png";
import "../stylesheets/Card.scss";
function CharacterNotFound() {
  return (
    <div className="chacNot">
      <p className="chacNot__title">Character not found</p>
      <img className="chacNot__img" src={notfound} />
    </div>
  );
}
export default CharacterNotFound;
