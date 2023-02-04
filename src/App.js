import "./App.scss";
// import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
