import React from "react";

const Pokemons = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
  <div>
    <h1>Pokemons</h1>
    
  </div>
);
};

export default Pokemons;
