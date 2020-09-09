import React from "react";
import "./about.scss";

let About = () => {
  return (
    <section className="about">
      <h1 className="titulo">ABOUT</h1>
      <div className="eldi">
        <div className="primerdi">
          <p className="parrafo1">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to
            debug.
          </p>
        </div>
        <div className="segundodi">
          <p className="parrafo2">
            We don’t make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code. React can also render on the server using Node and power
            mobile apps using React Native.
          </p>
        </div>
      </div>

      <div>
        <div className="eldi2">
          <a className="descarga">Click To Free Download</a>
        </div>
      </div>
    </section>
  );
};

export default About;
