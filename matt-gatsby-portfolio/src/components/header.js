import React from "react";

const Header = () => {
  return (
    <div className="nav-links">
      <a
        href="#aboutMe"
        onClick={() => handlePageChange("AboutMe")}
        className={page == "AboutMe" ? "nav-link active" : "nav-link"}
      >
        AboutMe
      </a>

      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={page == "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>

      <a
        href="#projects"
        onClick={() => handlePageChange("Projects")}
        className={page == "Projects" ? "nav-link-active" : "nav-link"}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={page == "Contact" ? "nav-link-active" : "nav-link"}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
