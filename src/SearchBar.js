import { useEffect, useState } from "react";

function SearchBar({ setFilters }) {
  const [name, setName] = useState("");

  const applyFilters = () => {
    setFilters({
        name: name
    })
  }

  useEffect(() => {
    applyFilters();
  }, [name]);

  return (
    <div id="search-bar" className="container text-center">
        <input id="search" type="text" onChange={(e) => setName(e.target.value)} placeholder="Search"/>
    </div>
  )
}

export default SearchBar;