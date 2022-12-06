import React, {useState} from "react";

const Header = ({page, handlePageNav}) => {
  return (
    <div className="nav-links">
      <a
        href="#aboutMe"
        onClick={() => handlePageNav("AboutMe")}
        className={page == "AboutMe" ? "nav-link active" : "nav-link"}
      >
        AboutMe
      </a>

      <a
        href="#resume"
        onClick={() => handlePageNav("Resume")}
        className={page == "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>

      <a
        href="#projects"
        onClick={() => handlePageNav("Projects")}
        className={page == "Projects" ? "nav-link-active" : "nav-link"}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => handlePageNav("Contact")}
        className={page == "Contact" ? "nav-link-active" : "nav-link"}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
