import { useState, useEffect } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import DisplayPokeList from "./DisplayPokeList";
import DisplayPokeInfo from "./DisplayPokeInfo";
import ImportPokeInfo from "./ImportPokeInfo";

import "./App.scss";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoID, setShowInfoID] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [filters, setFilters] = useState({});
  const [isImportingData, setIsImportingData] = useState(false);

  // Fetch initial data on mount
  useEffect(() => {
    console.log("App.js Fetch");
    // fetch("http://localhost:3000/pokemons?_sort=id")
    fetch("https://kiirosora.github.io/pokedex/poke.json")
      .then((response) => response.json())
      .then((data) => {
        data.pokemons.sort((a, b) => {
          return a.id - b.id;
        });
        // setIsImportingData(true);
        setPokemons(data.pokemons);
      });
  }, []);

  // console.log(filters);

  return (
    <div className="App">
      {isImportingData && (
        <ImportPokeInfo
          pokemons={pokemons}
          setPokemons={setPokemons}
          maxCount={151}
        />
      )}
      <h1 className="text-center mt-5 mb-5">Pokedex</h1>
      <Routes>
        <Route
          path="/"
          element={
            <DisplayPokeList
              pokemons={pokemons}
              filters={filters}
              setFilters={setFilters}
              setShowInfo={setShowInfo}
              setShowInfoID={setShowInfoID}
            />
          }
        />
        <Route
          path="/:pokeId"
          element={
            //showInfo && (
            <DisplayPokeInfo
              pokemons={pokemons}
              setShowInfo={setShowInfo}
              showInfoID={showInfoID}
            />
            //)
          }
        />
      </Routes>
    </div>
  );
}

export default App;
