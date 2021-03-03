import "../stylesheets/App.scss";
import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  const handleFilter = (input) => {};

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
