import React, { useEffect, useState } from "react";
import "../Button/lista.scss";
import "../Api/Api.scss";

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

  return (
    <div className="api">
      <h1 className="titulo"> Api Result</h1>
      <p className="link">{pokedex.pokedex ? pokedex.pokedex : "aun no"}</p>
      <ul className="ul">
        {pokemons.results
          ? pokemons.results.map((item) => (
              <li className="lista">{item.name}</li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Api;
