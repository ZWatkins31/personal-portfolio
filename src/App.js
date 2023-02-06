import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
