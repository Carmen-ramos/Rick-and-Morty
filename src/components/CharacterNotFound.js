import notfound from "../images/notfound.jpg";
import photo from "../images/imgfy.png";
import "../stylesheets/Card.scss";
function CharacterNotFound() {
  return (
    <div className="chacNot">
      <p className="chacNot">Character not found</p>
      <img className="chacNot__img" src={photo} />
    </div>
  );
}
export default CharacterNotFound;
