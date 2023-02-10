import "./DisplayPokeList.css";

function DisplayPokeList({ pokemons, setShowInfo, setShowInfoID }) {
  const displayPokeGrid = (pokemon) => {
    return (
      <div className="col-3" key={pokemon.id}>
        <div
          className="poke-card card"
          onClick={() => showPokeInfo(pokemon.id)}
        >
          <img
            className="card-img-top"
            src={pokemon.sprites["front_default"]}
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
        <div className="row gx-3 gy-3">{pokemons.map(displayPokeGrid)}</div>
      </div>
    </div>
  );
}

export default DisplayPokeList;
