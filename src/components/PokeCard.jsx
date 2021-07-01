import React from "react";
// import mockPokemonData from "../mock/pokeData.js";

const Pokemon = (pokemonData) => {
  console.log("DATA IN CHILD COMPONENT", pokemonData);

  return (
    <>
      <h5>Información del pokemon</h5>
      <h1>{pokemonData.name}</h1>
      <h1>{pokemonData.sprites}</h1>
      <h1>{pokemonData.video}</h1>
    </>
  );
};

export default Pokemon;
