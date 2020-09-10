import React from "react";
import "./header.scss";
import { text } from "../../data/textos";

let header = (props) => {
  return (
    <section className="header">
      <div className="perfil">
        <img src="/img/perfil.png" alt={props.title} className="muñeco"></img>
      </div>
      <h1 className="titulo">{text.header.title}</h1>
      <p className="titulo2">{text.header.subtitle}</p>
    </section>
  );
};

export default header;
