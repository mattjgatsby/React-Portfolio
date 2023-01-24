import React from "react";
import mePicture from '../assets/images/Me2019.png';

const About = () => {
  return (
    <div className="background" href="#About">
      <h1 className="text-center header_font_size">Matthew Gatsby</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-4">
          <img
            className="custom_about_image "
            src={mePicture}
            alt="me from 2019"
          ></img>
        </div>
        <div className="col-sm-5">
          <p className="text-right m-4 custom_about_text">
            Graduate of UC Berkeley Coding Boot Camp.
            Passion for code in my humble abode! 28 year old, living in Northern
            Virginia. If I'm not at my computer I'm spending time with my three
            dogs or rounding up the frogs. I'm dedicated to learning and growing
            my abilities as a web developer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;