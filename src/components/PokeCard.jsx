import React from "react";
// import mockPokemonData from "../mock/pokeData.js";

const Pokemon = (pokemonData) => {
  //console.log("DATA IN CHILD COMPONENT", pokemonData);
  const { name, sprites, video } = pokemonData;

  return (
    <>
      <h1>{name}</h1>
      <h5>{sprites}</h5>
      <h4>{video}</h4>
    </>
  );
};

export default Pokemon;
