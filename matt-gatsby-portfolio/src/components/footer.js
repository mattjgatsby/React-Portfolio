import React from "react";
import ghImage from "../assets/images/GitHub-Mark-Light-64px.png";

const Footer = () => {
const githubClick =() =>{
document.location.replace("https://github.com/mattjgatsby")
}
  return (
    <div className="navbar navbar-dark bg-dark fixed-bottom">
      <img
      className="mx-auto "
        src={ghImage}
        alt="GitHub Icon"
        onClick={githubClick}
      ></img>
    </div>
  );
};

export default Footer;
