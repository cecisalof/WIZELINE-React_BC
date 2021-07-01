import React from "react";
import { useState } from "react";
import "./styles.css";
import Pokemon from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData.js";

export default function App() {
  const [data, setData] = useState({});
  console.log("data", mockPokemonData);

  const parentToChild = () => {
    setData(mockPokemonData);
  };

  return (
    <div className="App">
      <h2>Find all pokemon´s info in the card below:</h2>
      <Pokemon
        parentToChild={data}
        // key={data}
        // setData ={setData}
      />
    </div>
  );
}
