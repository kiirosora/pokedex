function ImportPokeInfo({ pokemons, setPokemons, maxCount }) {
  const promises = [];
  const pokeList = pokemons;

  const importPokeInfo = () => {
    for (let id = 1; id <= maxCount; id++) {
      const found = pokeList.find((item) => item.id === id);
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      if (!found) {
        promises.push(fetch(url).then((res) => res.json()));
      }
    }

    Promise.all(promises).then((results) => {
      results.map((data) => {
        const pokeData = {};
        // console.log(data);
        pokeData.id = data.id;
        pokeData.name = data.name;
        pokeData.sprites = {};
        pokeData.sprites["front_default"] = data.sprites["front_default"];
        pokeData.sprites["other"] = {};
        pokeData.sprites["other"]["official-artwork"] = {};
        pokeData.sprites["other"]["official-artwork"]["front_default"] =
          data.sprites["other"]["official-artwork"]["front_default"];
        pokeData.types = data.types;
        console.log(`Added: ${pokeData.name}`);
        pokeList.push(pokeData);
        savePokeInfo(pokeData);
        return null;
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

  importPokeInfo();

  return null;
}

export default ImportPokeInfo;
