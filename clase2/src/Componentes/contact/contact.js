import React from "react";
import "./contact.scss";

let Contact = () => {
  return (
    <section className="contact">
      <h1 className="titulo">CONTACT US</h1>
      <div>
        <form className="formulario">
          <label htmlFor="name">Name</label>
          <input className="name" placeholder="Name"></input>
          <label htmlFor="email">Email Address</label>
          <input type="email" className="email" placeholder="Email"></input>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            className="phone"
            placeholder="Phone Number"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea className="message" placeholder="Message"></textarea>
          <div>
            <input type="submit" value="submit" className="submit"></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
