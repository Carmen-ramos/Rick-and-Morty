const getDataFromApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const cleanApiData = (data) => {
  return data.map((character) => {
    return {
      // id: character.id,
      name: character.name,
      species: character.species,
      gender: character.gender,
      origin: character.house,
      image: character.image,
      status: character.alive,
      location: character.ancestry,
      episode: character.actor,
    };
  });
};

export default {
  getDataFromApi: getDataFromApi,
  cleanApiData: cleanApiData,
};

//Poner antes de subir,
//https://rickandmortyapi.com/api/character
