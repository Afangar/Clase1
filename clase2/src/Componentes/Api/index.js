import React, { Component, useEffect, useState } from "react";
import "../Button/lista.scss";
import "../Api/Api.scss";

class Api extends Component {
  state = {
    pokemons: {},
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const request1 = await fetch("https://pokeapi.co/api/v2/");
    const response1 = await request1.json();

    const request2 = await fetch(response1.pokemon);
    const response = await request2.json();

    this.setState({ pokemons: response });
  };

  masPokemons = async () => {
    const request1 = await fetch(this.state.pokemons.next);
    const response = await request1.json();

    this.setState({ pokemons: response });
  };

  menosPokemons = async () => {
    const request1 = await fetch(this.state.pokemons.previous);
    const response = await request1.json();

    this.setState({ pokemons: response });
  };

  render() {
    return (
      <div className="api">
        <h1 className="titulo"> Api Result</h1>
        <ul className="ul">
          {this.state.pokemons.results
            ? this.state.pokemons.results.map((item) => (
                <li className="lista">{item.name}</li>
              ))
            : ""}
        </ul>
        <div>
          {this.state.pokemons.previous ? (
            <a onClick={this.menosPokemons}>Pagina anterior</a>
          ) : (
            ""
          )}
          {this.state.pokemons.next ? (
            <a onClick={this.masPokemons}>Siguiente pagina</a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Api;
