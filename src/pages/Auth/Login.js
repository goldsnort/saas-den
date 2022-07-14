import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../../api";

function Login() {
  const navigate = useNavigate();

  const notify = (e) => {
    console.log(e);
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
    fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
          "https://saasden-backend.herokuapp.com",
          "http://localhost:4000",
          "https://login.xero.com",
          `${baseURL}`,
        ],
      },
      credentials: "include",
      body: JSON.stringify({
        username: `${input.username}`,
        password: `${input.password}`,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          console.log("login was successful, now redirecting");
          return res.json();
        } else {
          notify();
        }
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("username", input.username);
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
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

        {/* SPACE FOR FIREBASE AUTHENTICATION */}

        {/* <div className="g-auth row">
          <div>Login using </div>
          <img src={require("../../assets/g_icon.png")} alt="google_logo"></img>
        </div> */}
      </div>
      <div
        className="auth-right"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default Login;
