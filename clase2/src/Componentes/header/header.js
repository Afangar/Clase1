import React from "react";
import "./header.scss";

let header = () => {
  return (
    <section className="header">
      <div className="perfil">
        <img src="/img/perfil.png" alt="Perfil" className="muñeco"></img>
      </div>
      <h1 className="titulo">REACT CON LOS VILLAMIZAR</h1>
      <p className="titulo2">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
};

export default header;
