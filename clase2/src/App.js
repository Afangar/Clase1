import React from "react";
import "./App.scss";
import Nav from "./Componentes/nav/nav";
import Header from "./Componentes/header/header";
import Portafolio from "./Componentes/portafolio/portafolio";
import About from "./Componentes/About/about";
import Contact from "./Componentes/contact/contact";
import Footer from "./Componentes/footer/footer";
import Copy from "./Componentes/Copyright/copy";
import Api from "./Componentes/Api/indes";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Api />
      <Portafolio />
      <About />
      <Contact />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
