import "../stylesheets/Main.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import api from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";
import userEvent from "@testing-library/user-event";

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("all");
  const [gender, setGender] = useState("all");
  const [origin, setOrigin] = useState([]);

  useEffect(() => {
    api
      .getDataFromApi()
      .then((data) => api.cleanApiData(data)) // intercalamaos la limpieza de data con esta estructura.
      .then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "species") {
      setSpecies(inputData.value);
    } else if (inputData.key === "gender") {
      setGender(inputData.value);
    } else if (inputData.key === "origin") {
      const indexOrigin = origin.indexOf(inputData.value);
      if (indexOrigin === -1) {
        const newOrigin = [...origin, inputData.value];
        setOrigin(newOrigin);
      } else {
        const newOrigin = [...origin];
        newOrigin.splice(indexOrigin, 1);
        setOrigin(newOrigin);
      }
    }
  };
  console.log(origin);

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name);
    })
    .filter((character) => {
      return species === "all" ? true : character.species === species;
    })
    .filter((character) => {
      return gender === "all" ? true : character.gender === gender;
    })
    .filter((character) => {
      if (origin.length === 0) {
        return true;
      } else {
        return origin.includes(character.origin);
      }
    });

  const getOrigin = () => {
    const origins = characters.map((character) => character.origin);
    return [...new Set(origins)];
  };

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  const resetButton = () => {
    setName("");
    setSpecies("all");
    setGender("all");
  };

  return (
    <>
      <Header />
      <div className="container-body">
        <main className="main">
          <Filters
            handleFilter={handleFilter}
            name={name}
            species={species}
            gender={gender}
            origin={getOrigin()}
            resetButton={resetButton}
          />

          <Switch>
            <Route exact path="/">
              <CharacterList characters={filterCharacters} name={name} />
            </Route>
            <Route path="/character/:id" render={renderDetail} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
