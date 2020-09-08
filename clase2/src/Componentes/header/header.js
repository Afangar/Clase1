import React from "react";
import "./header.scss";

let header = () => {
  return (
    <section className="header">
      <div className="perfil">
        <img src="/img/perfil.png" alt="Perfil"></img>
      </div>
      <h1>START BOOTSTRAP</h1>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
};

export default header;
