import React from "react";
import { useNavigate } from "react-router-dom";

function Missing() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  return (
    <div>
      <div>
        You wandered far and wide, but the webpage you are looking for is
        missing
      </div>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default Missing;
