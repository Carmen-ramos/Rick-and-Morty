import React from "react";

import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";

//episodes es un array preguntar si necesito el numero de episodios o un listado de cada uno.

function CharacterDetail(props) {
  console.log(props);

  if (props.character === undefined) {
    return <p>Character not found</p>;
  } else {
    const episodesNumber = props.character.episode.length;
    return (
      <>
        <section className="secDetail">
          <Link to="/">
            <h3>Back</h3>
          </Link>
          <img src={props.character.image} alt={props.character.name} />
          <h2>Name: {props.character.name}</h2>
          <p>Gender: {props.character.gender}</p>
          <p>Status: {props.character.status}</p>
          <p>Specie: {props.character.species}</p>
          <p>Origin: {props.character.origin}</p>
          <p>Location: {props.character.location}</p>
          <p>Episodes: {episodesNumber}</p>
        </section>
      </>
    );
  }
}

export default CharacterDetail;
