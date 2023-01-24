import React from "react";
import resume from "../assets/images/NewMattGatsbyResume.png";
import resumePDF from '../assets/images/MJGResume.pdf';

const Resume = () => {
  return (
    <div id="resume_page">
      <h1 id="resume_header">
        If you'd like to download my resume, simply click on it!
      </h1>

      <div>
        <a href={resumePDF} download id="resume">
            <img className="resume-picture" src={resume} alt="Matt Gatsby's Resume"/>
        </a>
      </div>
    </div>
  );
};

export default Resume;
