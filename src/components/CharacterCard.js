function CharacterCard(props) {
  return (
    <li>
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.species}</p>
    </li>
  );
}

export default CharacterCard;
