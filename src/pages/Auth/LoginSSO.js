import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSSO() {
  const navigate = useNavigate();

  function handleSSOLogin() {
    navigate("/connect-sso");
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="auth-container">
      <div className="auth-left col">
        <div className="auth-heading">Login Using Your SSO</div>
        <button onClick={handleSSOLogin} className="auth-button gray">
          Okta
        </button>
        <div className="auth-sub-heading">Can't find your SSO?</div>
        <div className="auth-sub-text">
          Tell us the name of your SSO and we'll integrate it for you
        </div>
        <label className="auth-item">Enter your SSO name</label>
        <form id="new-sso-form">
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

export default LoginSSO;
