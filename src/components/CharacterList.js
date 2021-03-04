import CharacterCard from "./CharacterCard";

function CharacterList(props) {
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
    return <CharacterCard item={item} />;
  });

  return <ul>{CharacterUl}</ul>;
}

export default CharacterList;
