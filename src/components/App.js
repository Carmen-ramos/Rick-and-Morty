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
      .then((data) => api.cleanApiData(data))
      .then((data) => setCharacters(data));
  }, []);

  // function to save value into status
  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "species") {
      setSpecies(inputData.value);
    } else if (inputData.key === "gender") {
      setGender(inputData.value);
    } else if (inputData.key === "house") {
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

  //function to filters by name, species and origin.
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

  //gettin the origin from ech character and save in the array
  const getOrigin = () => {
    const origins = characters.map((character) => character.origin);
    return [...new Set(origins)];
  };

  // Function to render details card
  const renderDetail = (props) => {
    console.log(props);
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  //Function to reset all the inputs in
  const resetButton = () => {
    setName("");
    setSpecies("all");
    setGender("all");
    setOrigin([]);
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
            origin={origin}
            getOrigin={getOrigin()}
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
