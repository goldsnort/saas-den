import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function handleSignupSubmit() {
  console.log("lol");
}

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-left col">
        <div className="auth-heading">Sign Up</div>
        <form
          onSubmit={handleSignupSubmit}
          id="signup-form"
          className="col auth-form"
        >
          <label className="auth-item">Name</label>
          <input type="text" required />
          <label className="auth-item">Company Name</label>
          <input type="text" required />
          <label className="auth-item">Work Email</label>
          <input type="email" required />
          <label className="auth-item">Password</label>
          <input type="password" required />
          <label className="auth-item">Confirm Password</label>
          <input type="password" required />
          <button className="auth-button"> Sign Up</button>
        </form>
        <div className="auth-text row">
          <div>Already a member?&nbsp;</div>
          <Link to="/login" className="blue-text" exact>
            Login
          </Link>
        </div>
        <div className="g-auth row">
          <div>Sign Up with</div>
          <img src={require("../../assets/g_icon.png")} alt="google_logo"></img>
        </div>
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default Signup;
