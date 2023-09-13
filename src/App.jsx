import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Gallery from "./Pages/Gallery";
import Policies from "./Pages/Policies";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
