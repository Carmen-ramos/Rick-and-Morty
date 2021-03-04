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

  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "species") {
      setSpecies(inputData.value);
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
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Filters handleFilter={handleFilter} name={name} species={species} />

      <Switch>
        <Route exact path="/">
          <CharacterList characters={filterCharacters} name={name} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
}

export default App;
