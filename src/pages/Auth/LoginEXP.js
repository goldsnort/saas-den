import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginEXP() {
  const navigate = useNavigate();
  function handleEXPLogin() {
    fetch("http://localhost:4000/xero")
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        } else console.log("The login exp request to backend failed!!!");
      })
      .then((data) => {
        window.location.href = `${data.url}`;
      });
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth-container">
      <div className="auth-left col">
        <div className="auth-heading">
          Login Using Your Expense Management System
        </div>
        <button onClick={handleEXPLogin} className="auth-button gray">
          Xero
        </button>
        <div className="auth-sub-heading">
          Can't find your Expense Management System?
        </div>
        <div className="auth-sub-text">
          Tell us the name of your Expense Management System and we'll integrate
          it for you
        </div>
        <label className="auth-item">
          Enter your Expense Management System name
        </label>
        <form id="new-exp-form">
          <div className="row ">
            <input type="text" required />
            <button className="auth-button small">Submit</button>
          </div>
        </form>
        <div className="auth-sub-text">Want to get it done in 3 days?</div>
        <p className="auth-item row">
          <a style={{ whiteSpace: "nowrap" }} href="/">
            Click here
          </a>
          &nbsp;to get on a call with our team to custom build it for you
        </p>
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default LoginEXP;
