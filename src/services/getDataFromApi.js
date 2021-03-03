const getDataFromApi = () => {
  return fetch(
    "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          image: character.image,
          status: character.status,
          //episodies: character.episodie
        };
      });
    });
};

/*
const getDataFromApi = () => {
  return fetch(
    "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return character;
      });
    });
};*/

export default getDataFromApi;

//Poner antes de subir,
//https://rickandmortyapi.com/api/character
