import React, { useEffect, useState } from "react";
import "../Button/lista.scss";
import "../Api/Api.scss";

const Api = () => {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () => {
    const request1 = await fetch("https://pokeapi.co/api/v2/");
    const response1 = await request1.json();

    const request2 = await fetch(response1.pokemon);
    const response = await request2.json();

    setPokemons(response);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const masPokemons = async () => {
    const request1 = await fetch(pokemons.next);
    const response = await request1.json();

    setPokemons(response);
  };

  const menosPokemons = async () => {
    const request1 = await fetch(pokemons.previous);
    const response = await request1.json();

    setPokemons(response);
  };

  return (
    <div className="api">
      <h1 className="titulo"> Api Result</h1>
      <ul className="ul">
        {pokemons.results
          ? pokemons.results.map((item) => (
              <li className="lista">{item.name}</li>
            ))
          : ""}
      </ul>
      <div>
        {pokemons.previous ? (
          <a onClick={menosPokemons}>Pagina anterior</a>
        ) : (
          ""
        )}
        {pokemons.next ? <a onClick={masPokemons}>Siguiente pagina</a> : ""}
      </div>
    </div>
  );
};

export default Api;
