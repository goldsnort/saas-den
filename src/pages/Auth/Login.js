import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies, Cookies } from "react-cookie";

function Login() {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const notify = (e) => {
    toast.error("Failed login, please try again");
  };

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter password";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("login function ran");
    fetch("https://saasden-backend.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${input.username}`,
        password: `${input.password}`,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          console.log("the login function is working now");
        } else {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("login failed, please try a different username");
      });
  }

  return (
    <div className="auth-container ">
      <div className="auth-left col auth-form">
        <div className="auth-heading">Login</div>
        <form onSubmit={handleLoginSubmit} id="login-form" className="col">
          <label className="auth-item">Username</label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.username && <div className="err">{error.username}</div>}
          <label className="auth-item">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.password && <div className="err">{error.password}</div>}
          <button className="auth-button">Login</button>
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
