import React from "react";
import "./App.scss";
import Nav from "./Componentes/nav/nav";
import Header from "./Componentes/header/header";
import Portafolio from "./Componentes/portafolio/portafolio";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Portafolio />
    </div>
  );
}

export default App;
