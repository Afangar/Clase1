import React from "react";
import "./portafolio.scss";

let Portafolio = () => {
  return (
    <section className="portafolio">
      <h1 className="titulo">PORTAFOLIO</h1>
      <div className="primerasimg">
        <div>
          <img src="/img/cabaña.png" alt="cabaña" className="cabaña"></img>
        </div>
        <div>
          <img src="/img/pastel.png" alt="pastel" className="pastel"></img>
        </div>
        <div>
          <img src="/img/feria.png" alt="feria" className="feria"></img>
        </div>
      </div>
      <div className="segundasimg">
        <div>
          <img src="/img/control.png" alt="control" className="control"></img>
        </div>
        <div>
          <img src="/img/caja.png" alt="caja" className="caja"></img>
        </div>
        <div>
          <img
            src="/img/submarino.png"
            alt="submarino"
            className="submarino"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
