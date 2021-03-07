import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CardDetail.scss";
import photo from "../images/scary.gif";
import retturn from "../images/retturn.png";

//episodes es un array preguntar si necesito el numero de episodios o un listado de cada uno.

function CharacterDetail(props) {
  if (props.character === undefined) {
    return (
      <div className="secNot">
        <section>
          <p className="secNot__title">Bitch, wrong url. Check it, Bitch</p>
          <img className="secNot__img" src={photo} />
        </section>
      </div>
    );
  } else {
    const episodesNumber = props.character.episode.length;
    return (
      <>
        <section className="secDetail">
          <Link to="/">
            <img
              src={retturn}
              alt="logo return home page"
              className="secDetail__logo"
            />
            <p> Back</p>
          </Link>

          <div className="secDetail__titleContainer">
            <img
              className="secDetail__titleContainer--img"
              src={props.character.image}
              alt={props.character.name}
            />
            <h3 className="secDetail__titleContainer--title">
              {props.character.name}
            </h3>
          </div>

          <div className="secDetail__container">
            <p className="secDetail__container--text">
              Gender: <span>{props.character.gender}</span>
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
