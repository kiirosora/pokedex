import DisplayPokeList from "./DisplayPokeList";
import DisplayPokeInfo from "./DisplayPokeInfo";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoID, setShowInfoID] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  let temp = true;

  // Fetch initial data on mount
  useEffect(() => {
    if (temp) {
      fetch("http://localhost:3000/pokemons")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            return a.id - b.id;
          });
          setPokemons(data);
        });
    }
    temp = false;
  }, []);

  return (
    <div className="App">
      <h1 className="text-center mt-5 mb-5">Pokedex</h1>
      <DisplayPokeList
        pokemons={pokemons}
        setShowInfo={setShowInfo}
        setShowInfoID={setShowInfoID}
      />
      {showInfo && (
        <DisplayPokeInfo
          pokemons={pokemons}
          setShowInfo={setShowInfo}
          showInfoID={showInfoID}
        />
      )}
    </div>
  );
}

export default App;
