import React, { useEffect, useState } from "react";

const Api = () => {
  const [pokedex, setPokedex] = useState({});
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/")
      .then((pokedex) => pokedex.json())
      .then((obj) => setPokedex(obj));
  }, []);

  useEffect(() => {
    if (pokedex.pokemon) {
      fetch(pokedex.pokemon)
        .then((response) => response.json())
        .then((result) => setPokemons(result));
    }
  }, [pokedex]);

  useEffect(() => {
    console.log(pokemons);
  });

  return (
    <div>
      <h1> Api result</h1>
      <p>{pokedex.pokedex ? pokedex.pokedex : "aun no"}</p>
      <ul>
        {pokemons.results
          ? pokemons.results.map((item) => <li>{item.name}</li>)
          : ""}
      </ul>
    </div>
  );
};

export default Api;
