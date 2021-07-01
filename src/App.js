import React from "react";
import { useState } from "react";
import "./styles.css";
import Pokemon from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData.js";

export default function App(pokemonData) {
  const [data, setData] = useState({});
  console.log("data", mockPokemonData);

  const parentToChild = () => {
    setData(mockPokemonData);
  };

  return (
    <div className="App">
      <h1>WelcomE to your first mini challenge!</h1>
      <Pokemon
        parentToChild={data}
        // key={data}
        // setData ={setData}
      />
    </div>
  );
}
