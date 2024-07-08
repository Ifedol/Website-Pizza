import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are committed to our quality policy. The concept of total quality
          which includes the satisfaction of customers, suppliers and personnel,
          is one we hold most dearly. By operating in conformity with the
          requirement of ISO 9001, we enhance our service delivery by ensuring
          consistency, standardization and appropriate controls at each point
          and also meeting client expectations within acceptable international
          standards. A trail will convinced you!!!!!!!!!!!!!
        </p>
      </div>
    </div>
  );
}

export default About;
