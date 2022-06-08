import "./App.css";
import "./pages/Home";
import Home from "./pages/Home";
import EarlyAccess from "./pages/EarlyAccess";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
