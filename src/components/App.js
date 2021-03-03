import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import userEvent from "@testing-library/user-event";

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState();
  const [species, setSpecies] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  //preguntar por qué no funciona
  characters.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "species") {
      setSpecies(inputData.value);
      console.log(species);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name);
    })
    .filter((character) => {
      if (species === "all") {
        return true;
      } else {
        return character.species === species;
      }
    });
  //console.log(filterCharacters);

  const renderDetail = (props) => {
    // console.log(props.match.params.id);
    const id = props.match.params.id;
    // console.log(id);
    const selectCharacter = characters.find((character) => {
      // console.log(character.id === id);
    });
    console.log(selectCharacter);
    return <CharacterDetail />;
  };

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filterCharacters} />
      <Switch>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
}

export default App;
