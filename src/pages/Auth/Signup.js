import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    cName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    cName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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

        case "cName":
          if (!value) {
            stateObj[name] = "Please enter Company Name";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const notify = (e) => {
    toast.error("Failed, please try again with new email and username");
  };

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch("https://saasden-backend.herokuapp.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${input.username}`,
        name: `${input.username}`,
        companyName: `${input.cName}`,
        workEmail: `${input.email}`,
        password: `${input.password}`,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          alert("Signup was successful, Login with your credentials");
          navigate("/login");
        } else {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("signup failed, please try a different username");
      });
  }

  return (
    <div className="auth-container">
      <div className="auth-left col">
        <div className="auth-heading">Sign Up</div>
        <form
          onSubmit={handleSignupSubmit}
          id="signup-form"
          className="col auth-form"
        >
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
          <label className="auth-item">Company Name</label>
          <input
            type="text"
            name="cName"
            value={input.cName}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.cName && <div className="err">{error.cName}</div>}
          <label className="auth-item">Work Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.email && <div className="err">{error.email}</div>}
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
          <label className="auth-item">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.confirmPassword && (
            <div className="err">{error.confirmPassword}</div>
          )}
          <button className="auth-button">Sign Up</button>
        </form>
        <div className="auth-text row">
          <div>Already a member?&nbsp;</div>
          <Link to="/login" className="blue-text">
            Login
          </Link>
        </div>

        {/* FIREBASE AUTHENTICATION WHEN IT STARTS */}

        {/* <div className="g-auth row">
          <div>Sign Up with</div>
          <img src={require("../../assets/g_icon.png")} alt="google_logo"></img>
        </div> */}
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default Signup;
