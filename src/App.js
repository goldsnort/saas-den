import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import LoginSSO from "./pages/Auth/LoginSSO";
import ConnectSSO from "./pages/Auth/ConnectSSO";
import LoginEXP from "./pages/Auth/LoginEXP";
import ConnectEXP from "./pages/Auth/ConnectEXP";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashDefault from "./components/DashComponents/DashDefault";
import Subscription from "./components/DashComponents/Subscription";
import Employees from "./components/DashComponents/Employees";
import Teams from "./components/DashComponents/Teams";
import Visualize from "./components/DashComponents/Visualize";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login-sso" element={<LoginSSO />}></Route>
          <Route path="/connect-sso" element={<ConnectSSO />}></Route>
          <Route path="/login-exp" element={<LoginEXP />}></Route>
          <Route path="/connect-exp" element={<ConnectEXP />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashDefault />}></Route>
            <Route path="subscription" element={<Subscription />}></Route>
            <Route path="employees" element={<Employees />}></Route>
            <Route path="teams" element={<Teams />}></Route>
            <Route path="visualize" element={<Visualize />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
