import { useEffect, useState } from "react";
import "./DisplayPokeList.scss";

function DisplayPokeList({ pokemons, filters, setShowInfo, setShowInfoID }) {
  const [filteredPoke, setFilteredPoke] = useState([]);

  useEffect(() => {
    let result = pokemons;
    if (filters.name !== undefined && filters.name !== "") {
      result = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(filters.name.toLowerCase());
      });
    }
    setFilteredPoke(result);
  }, [pokemons, filters]);

  const displayPokeGrid = (pokemon) => {
    return (
      <div className="col-3" key={pokemon.id}>
        <div
          className="poke-card card"
          onClick={() => showPokeInfo(pokemon.id)}
        >
          <img
            className="card-img-top"
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt="pokemon sprite"
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              {pokemon.id} - {pokemon.name}
            </h5>
          </div>
        </div>
      </div>
    );
  };

  const showPokeInfo = (pokeID) => {
    setShowInfoID(pokeID);
    setShowInfo(true);
  };

  return (
    <div id="poke-list">
      <div id="poke-grid" className="container mt-3 mb-3">
        {filteredPoke.length ?
          <div className="row gx-3 gy-3">
            {filteredPoke.map(displayPokeGrid)}
          </div>:
          <div className="row gx-3 gy-3 justify-content-md-center">
            <div className="col-4 text-center">No Results</div>
          </div>
        }
      </div>
    </div>
  );
}

export default DisplayPokeList;
