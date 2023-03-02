import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dynamicImporter from "./utilities/Importer";
import "./DisplayPokeInfo.css";

function DisplayPokeInfo({ pokemons, setShowInfo, showInfoID }) {
  const [pokemon, setPokemon] = useState({});
  const { pokeId } = useParams();
  const navigate = useNavigate();
  const linkToHome = () => navigate("/");

  useEffect(() => {
    if (pokemons.length) {
      setPokemon(
        pokemons[pokemons.findIndex((item) => item.id === Number(pokeId))]
      );
      console.log(
        "useEffect",
        pokemons,
        pokemons.findIndex((item) => item.id === pokeId)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  return (
    <div id="poke-info" onClick={linkToHome}>
      <div className="container">
        <div className="card mt-4">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img"
                src={
                  pokemon.sprites
                    ? pokemon.sprites.other["official-artwork"]["front_default"]
                    : null
                }
                alt={pokemon.name}
              />
            </div>
            <div className="col">
              <div className="card-body">
                <h1 className="card-title">
                  [{pokemon.id}] {pokemon.name}
                </h1>
                <h5 className="card-subtitle text-muted mt-3">
                  Type:
                  {pokemon.types
                    ? pokemon.types.map((type) => {
                        return (
                          <span
                            className={"type-badge-" + type.type.name}
                            key={type.type.name}
                          >
                            <img
                              src={dynamicImporter(type.type.name, "svg")}
                              alt="type"
                            />
                            {type.type.name}
                          </span>
                        );
                      })
                    : null}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPokeInfo;
