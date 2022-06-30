import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-container">
      <Sidebar />
      <div className="dash-right col">
        <Navbar />
        <hr className="dashtop-hr" />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
