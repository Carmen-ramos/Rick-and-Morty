import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  console.log(props.item.status);

  //intentar pasar a ternario
  const especiesIcon = () => {
    if (props.item.species === "Alien") {
      return <i class="fas fa-pastafarianism"></i>;
    } else if (props.item.species === "Human") {
      return <i class="fas fa-user-alt"></i>;
    }
  };
  const statusIcon = () => {
    if (props.item.status === "Alive") {
      return <i class="far fa-laugh"></i>;
    } else if (props.item.status === "Dead") {
      return <i class="far fa-dizzy"></i>;
    } else {
      return <i class="fas fa-question"></i>;
    }
  };

  console.log(especiesIcon);
  return (
    <Link to={`/character/${props.item.id}`}>
      <h3 className="card__title">{props.item.name}</h3>
      <img className="card__img" src={props.item.image} alt={props.item.name} />
      <div className="card__itemContainer">
        <div className="card__itemContainer--species">
          <p>{props.item.species}</p>
          <span>{especiesIcon()}</span>
        </div>
        <div className="card__itemContainer--status">
          <p>{props.item.status}</p>
          <span>{statusIcon()}</span>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
