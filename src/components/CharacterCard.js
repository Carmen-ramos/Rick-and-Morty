import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.item.id}`}>
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.species}</p>
    </Link>
  );
}

export default CharacterCard;
