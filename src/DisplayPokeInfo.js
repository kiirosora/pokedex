import { useState, useEffect } from "react";
import "./DisplayPokeInfo.css";

function DisplayPokeInfo({ pokemons, setShowInfo, showInfoID }) {
  const [pokemon, setPokemon] = useState({});
  // let temp = true;

  useEffect(() => {
    /* if (temp) {
      temp = false;
      fetch(`http://localhost:3000/pokemons/${showInfoID}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPokemon(data);
          temp = true;
        });
    } */
    if (pokemons.length)
      setPokemon(
        pokemons[pokemons.findIndex((item) => item.id === showInfoID)]
      );
  }, []);

  const unmountComponent = () => {
    setShowInfo(false);
  };

  return (
    <div id="poke-info" onClick={unmountComponent}>
      <div className="container">
        <div className="card mt-4">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img"
                src={pokemon.sprites ? pokemon.sprites["front_default"] : null}
              />
            </div>
            <div className="col">
              <div className="card-body">
                <h1 className="card-title">
                  [{pokemon.id}] {pokemon.name}
                </h1>
                <h5 className="card-subtitle text-muted">
                  Type:
                  {pokemon.types
                    ? pokemon.types.map((type) => " " + type.type.name)
                    : null}
                </h5>
                {console.log(pokemon)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPokeInfo;
