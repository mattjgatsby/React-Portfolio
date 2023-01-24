import React from "react";
import myLogo from "../assets/images/myLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg_custom">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={myLogo} alt="my custom logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link " href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
