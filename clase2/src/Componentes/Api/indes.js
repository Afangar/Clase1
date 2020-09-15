import React, { useEffect, useState } from "react";

const Api = () => {
  const [pokedex, setPokedex] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/")
      .then((pokedex) => pokedex.json())
      .then((obj) => setPokedex(obj));
  }, []);

  useEffect(() => {
    console.log(pokedex);
  }, [pokedex]);

  return (
    <div>
      <h1> Api result</h1>
      <p>{pokedex.pokedex ? pokedex.pokedex : "aun no"}</p>
    </div>
  );
};

export default Api;
