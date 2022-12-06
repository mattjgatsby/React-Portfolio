import React from "react";
import mePicture from "../assets/images/Me2019.png";

function About() {
  return (
    <div>
      <h1>Matthew Gatsby</h1>
      <img
        class="image w-25 p-3 mx-auto d-block"
        src={mePicture}
        alt="me from 2019"
      ></img>
      <p>
        Passion for code in my humble abode! 28 year old, living in Northern
        Virginia. If I'm not at my computer I'm spending time with my three dogs
        or rounding up the frogs.
      </p>
    </div>
  );
}

export default About;
