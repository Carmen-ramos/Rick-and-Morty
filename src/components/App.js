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
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  const handleFilter = (inputData) => {
    console.log(inputData);
    if (inputData.key === "name") {
      setName(inputData.value);
      console.log(name);
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

  const renderDetail = (props) => {
    console.log(props.match.params);
    const id = parseInt(props.match.params.id);
    console.log(id);
    const selectCharacter = characters.find((character) => {
      console.log(character.id === id);
      console.log(character);
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
