import React from "react";
import "./App.scss";
import Nav from "./Componentes/nav/nav";
import Header from "./Componentes/header/header";
import Portafolio from "./Componentes/portafolio/portafolio";
import About from "./Componentes/About/about";
import Contact from "./Componentes/contact/contact";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Portafolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
