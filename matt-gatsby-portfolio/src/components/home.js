import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import About from "./aboutMe";

function Home() {
  const [page, setPage] = useState("About");

  const renderPage = () => {
    if (page === "About") {
      return <About />;
    // } else if (page == "Projects") {
    //   return <Projects />;
    // } else if (page == "Resume") {
    //   return <Resume />;
    // } else if (page == "Contact") {
    //   return <Contact />;
    }
  };
  const handlePageNav = (page) => setPage(page);
  return (
    <div>
      <Header page={page} handlePageNav={handlePageNav} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Home;
