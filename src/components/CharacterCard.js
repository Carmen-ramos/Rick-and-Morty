import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const especiesIcon = () => {
    if (props.item.species === "Alien") {
      return <i className="fas fa-pastafarianism"></i>;
    } else if (props.item.species === "Human") {
      return <i className="fas fa-user-alt"></i>;
    }
  };
  const statusIcon = () => {
    if (props.item.status === "Alive") {
      return <i className="far fa-laugh"></i>;
    } else if (props.item.status === "Dead") {
      return <i className="far fa-dizzy"></i>;
    } else {
      return <i className="fas fa-question"></i>;
    }
  };

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
