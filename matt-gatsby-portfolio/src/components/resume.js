import React from "react";
import myResume from "../assets/images/Matthew Gatsby.png";

function Resume() {
  return (
    <div className="background">
      <div className="card-body">
        <h5 className="image_center h1">Click to Download!</h5>
        <a href={myResume} className="card-body">
          <img src={myResume} className="image_center h1" alt="my resume" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
