import React from "react";
import mePicture from "../assets/images/Me2019.png";

function About() {
  return (
    <div className="background ">
      <h1 className="text-center ">Matthew Gatsby</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-4">
          <img
            className="custom_about_image "
            src={mePicture}
            alt="me from 2019"
          ></img>
        </div>
        <div className="col-sm-5">
          <p className="text-right m-4 custom_font_size">
            Passion for code in my humble abode! 28 year old, living in Northern
            Virginia. If I'm not at my computer I'm spending time with my three
            dogs or rounding up the frogs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
