import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const CharacterUl = props.characters.map((item) => {
    return <CharacterCard item={item} />;
  });

  return <ul>{CharacterUl}</ul>;
}

export default CharacterList;
