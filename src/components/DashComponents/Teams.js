import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Teams() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="dash-outlet nothing col">
      <img src={require("../../assets/undraw.png")} />
      Coming up soon...
    </div>
  );
}

export default Teams;
