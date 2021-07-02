import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";
import "./PokeCard.css";

const Pokemon = (pokemonData) => {
  console.log("DATA IN CHILD COMPONENT", mockPokemonData);
  // const { name, sprites, video } = pokemonData;

  return (
    <div className="card-container">
      <h1>{mockPokemonData.name}</h1>
      <img
        className="card-img"
        src={mockPokemonData.sprites.front_default}
        alt=""
      />
      <img
        className="card-img"
        src={mockPokemonData.sprites.front_shiny}
        alt=""
      />
      <a href={mockPokemonData.video}>
        <button className="card-button">Watch video here!</button>
      </a>
    </div>
  );
};

export default Pokemon;
