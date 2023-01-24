import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
// import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/*<Projects />
      <Resume />
      <Contact /> */}
    </>
  );
}

export default App;