import { useState, useEffect } from "react";

function ImportPokeInfo({ pokemons, setPokemons, maxCount }) {
  let counter = 1;
  const promises = [];
  const pokeList = pokemons;

  const importPokeInfo = () => {
    for (let id = 1; id <= maxCount; id++) {
      const found = pokeList.find((item) => item.id == id);
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      if (!found) {
        promises.push(fetch(url).then((res) => res.json()));
      } else {
        console.log("exists");
      }
    }

    Promise.all(promises).then((results) => {
      results.map((data) => {
        const pokeData = {};
        pokeData.id = data.id;
        pokeData.name = data.name;
        pokeData.sprites = {};
        pokeData.sprites["front_default"] = data.sprites["front_default"];
        pokeData.types = data.types;
        console.log(`Added: ${pokeData.name}`);
        pokeList.push(pokeData);
        savePokeInfo(pokeData);
      });
    });
    //}
  };

  const savePokeInfo = (pokeData) => {
    const list = pokemons;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokeData),
    };

    fetch("http://localhost:3000/pokemons", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        list.push(data);
        setPokemons(list);
      });
  };

  /* for (let i = 1; i <= maxCount; i++) {
    importPokeInfo(i);
  } */
  importPokeInfo();

  return null;
}

export default ImportPokeInfo;
