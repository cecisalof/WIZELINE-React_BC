import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";

const Pokemon = (pokemonData) => {
  console.log("DATA IN CHILD COMPONENT", mockPokemonData);
  // const { name, sprites, video } = pokemonData;

  return (
    <>
      <h1>{mockPokemonData.name}</h1>
      <img src={mockPokemonData.sprites.front_default} alt="" />
      <img src={mockPokemonData.sprites.front_shiny} alt="" />
      <a href={mockPokemonData.video}>
        <button>Watch video here!</button>
      </a>
    </>
  );
};

export default Pokemon;
