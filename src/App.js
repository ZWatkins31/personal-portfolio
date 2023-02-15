import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SideBars from "./components/SideBars";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <SideBars />
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}

export default App;
