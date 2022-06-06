import "./App.css";
import "./pages/Home";
import Home from "./pages/Home";
import EarlyAccess from "./pages/EarlyAccess";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
    duration: 2300,
    offset: 200,
  });
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
