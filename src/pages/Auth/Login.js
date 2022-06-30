import { React } from "react";
import { Link } from "react-router-dom";

function Login() {
  function handleLoginSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="auth-container ">
      <div className="auth-left col auth-form">
        <div className="auth-heading">Login</div>
        <form onSubmit={handleLoginSubmit} id="login-form" className="col">
          <label className="auth-item">Username</label>
          <input type="text" required />
          <label className="auth-item">Password</label>
          <input type="password" />
          <Link to="/dashboard" className="auth-button">
            {" "}
            Login
          </Link>
        </form>
        <div className="auth-text row">
          <div>New to SaasDen?&nbsp;</div>
          <Link to="/signup" className="blue-text">
            Sign Up
          </Link>
        </div>
        <div className="g-auth row">
          <div>Login using </div>
          <img src={require("../../assets/g_icon.png")} alt="google_logo"></img>
        </div>
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default Login;
