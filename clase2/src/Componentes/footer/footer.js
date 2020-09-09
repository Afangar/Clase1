import React from "react";
import "./footer.scss";

let footer = () => {
  return (
    <section className="footer">
      <div className="di">
        <div className="location">
          <h2>LOCATION</h2>
          <h3>Calle 40a #81a-90</h3>
        </div>
        <div className="web">
          <h2>AROUND THE WEB</h2>
          <div>
            <img
              src="/img/facebook.png"
              alt="Facebook"
              className="facebook"
            ></img>
            <img src="/img/twitter.png" alt="Twitter" className="twitter"></img>
            <img
              src="/img/linkedin.png"
              alt="Linkedin"
              className="linkedin"
            ></img>
            <img src="/img/reddit.png" alt="Reddit" className="reddit"></img>
          </div>
        </div>
        <div className="free">
          <h2>ABOUT FREELANCER</h2>
          <h3 className="p1">
            Freelance is a free to use, MIT licensed Bootstrap theme created by
          </h3>
        </div>
      </div>
    </section>
  );
};

export default footer;
