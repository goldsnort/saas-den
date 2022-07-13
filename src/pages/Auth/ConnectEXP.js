import { React, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

function ConnectEXP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  function handleEXPConnect(e) {
    e.preventDefault();
  }

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="auth-container">
      <div className="auth-left col">
        <div className="auth-heading">
          Login Using Your Expense Management System
        </div>
        <div className="auth-sub-heading">
          We sent you an authentication code
        </div>
        <div className="auth-sub-text mb-20">
          Please, enter the 6 digit code in the fields below
        </div>
        <form onSubmit={handleEXPConnect} className="col">
          <OtpInput
            className="otp-input"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            required
          />
          <button className="auth-button">Submit</button>
        </form>
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default ConnectEXP;
