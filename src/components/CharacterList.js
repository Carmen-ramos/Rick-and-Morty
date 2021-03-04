import CharacterCard from "./CharacterCard";

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
      <li key={item.id}>
        <CharacterCard item={item} />
      </li> /* characterul es un array por eso en return de abajo tenemos que hacer el conficional ternario y ponerle el lengh >0 para que pinte la lista */
    );
  });

  return <ul>{CharacterUl.length > 0 ? CharacterUl : <p>No esta</p>}</ul>;
}

export default CharacterList;
