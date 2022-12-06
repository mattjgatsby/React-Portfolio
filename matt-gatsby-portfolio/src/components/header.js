import React from "react";

const Header = ({page, handlePageNav}) => {
  return (
    <div className="nav-links App-header">
      <a
        href="#About"
        onClick={() => handlePageNav("About")}
        className={page === "About" ? "nav-link active" : "nav-link"}
      >
        About Me
      </a>

      <a
        href="#resume"
        onClick={() => handlePageNav("Resume")}
        className={page === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>

      <a
        href="#Project"
        onClick={() => handlePageNav("Project")}
        className={page === "Project" ? "nav-link-active" : "nav-link"}
      >
        Projects
      </a>

      <a
        href="#Contact"
        onClick={() => handlePageNav("Contact")}
        className={page === "Contact" ? "nav-link-active" : "nav-link"}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
