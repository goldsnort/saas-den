import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar-container col">
      {/* TODO:INSERT THE COMPANY LOGO HERE */}
      <img src={require("../../assets/logo_saasden.png")} alt="company logo" />
      <NavLink to="/dashboard" className="sidebar-dash" exact="true">
        <MdDashboard
          style={{
            marginRight: "12px",
            paddingRight: "2px",
            transform: "scale(1.4)",
          }}
        />
        Dashboard
      </NavLink>
      <hr className="horizontal-rule" />
      <NavLink
        to="/dashboard/subscription"
        activeClassName={"sidebar-item active"}
        className="sidebar-item"
        exact="true"
      >
        <div className="radio-button" />
        Subscription
      </NavLink>
      <NavLink
        to="/dashboard/employees"
        activeClassName={"sidebar-item active"}
        className="sidebar-item"
        exact="true"
      >
        <div className="radio-button" />
        Employees
      </NavLink>
      <NavLink
        to="/dashboard/teams"
        activeClassName={"sidebar-item active"}
        className="sidebar-item"
        exact="true"
      >
        <div className="radio-button" />
        Teams
      </NavLink>
      <NavLink
        to="/dashboard/visualize"
        activeClassName={"sidebar-item active"}
        className="sidebar-item"
        exact="true"
      >
        <div className="radio-button" />
        Visualize
      </NavLink>
      <hr className="horizontal-rule" />

      <div className="more-features">More Features Coming Soon</div>
    </div>
  );
}

export default Sidebar;
