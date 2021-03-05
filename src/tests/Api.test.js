import api from "../services/getDataFromApi";

test("check if getDatafromApi return a object", () => {
  const inputData = {
    info: {
      count: 671,
      pages: 34,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null,
    },
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z",
      },
    ],
  };

  const outputData = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: "Earth (C-137)",
      location: "Earth (Replacement Dimension)",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: "Earth (C-137)",
      location: "Earth (Replacement Dimension)",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
    },
  ];
  const restulData = api.cleanApiData(inputData);

  expect(restulData).toEqual(outputData);
});
