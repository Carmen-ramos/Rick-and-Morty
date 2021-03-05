import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CardDetail.scss";

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
            <h3 className="secDetail__return">Back</h3>
          </Link>
          <img
            className="secDetail__img"
            src={props.character.image}
            alt={props.character.name}
          />
          <h3 className="secDetail__title"> {props.character.name}</h3>
          <div className="secDetail__container">
            <p className="secDetail__container--text">
              Gender: {props.character.gender}
            </p>
            <p className="secDetail__container--text">
              Status: {props.character.status}
            </p>
            <p className="secDetail__container--text">
              Specie: {props.character.species}
            </p>
            <p className="secDetail__container--text">
              Origin: {props.character.origin}
            </p>
            <p className="secDetail__container--text">
              Location: {props.character.location}
            </p>
            <p className="secDetail__container--text">
              Episodes: {episodesNumber}
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default CharacterDetail;
