import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheets/Card.scss";

function CharacterList(props) {
  console.log(props.name);
  const charactersSorted = props.characters.sort((characterA, characterB) => {
    if (characterA.name > characterB.name) {
      return 1;
    }
    if (characterA.name < characterB.name) {
      return -1;
    }
    return 0;
  });
  const CharacterUl = charactersSorted.map((item) => {
    return (
      <li key={item.id} className="card">
        <CharacterCard item={item} />
      </li> /* characterul es un array por eso en return de abajo tenemos que hacer el conficional ternario y ponerle el lengh >0 para que pinte la lista */
    );
  });

  return (
    <ul className="main__container">
      {CharacterUl.length > 0 ? CharacterUl : <CharacterNotFound />}
    </ul>
  );
}

export default CharacterList;
