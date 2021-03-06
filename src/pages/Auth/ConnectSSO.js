import { React, useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { baseURL } from "../../api";

function ConnectSSO() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    domain: "",
    api: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleOktaApi(e) {
    e.preventDefault();
    fetch(`${baseURL}/okta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
          "https://saasden-backend.herokuapp.com",
          "http://localhost:4000",
          `${baseURL}`,
          "https://login.xero.com",
        ],
        token: localStorage.getItem("token"),
      },
      credentials: "include",
      body: JSON.stringify({
        oktaDomain: `${input.domain}`,
        oktaAPIKey: `${input.api}`,
      }),
    }).then((res) => {
      if (res.ok === true) {
        navigate("/dashboard");
      }
    });
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
        <div className="okta-help col">
          <div className="okta-help-item">Login to your Okta account</div>
          <FaLongArrowAltDown size={20} color="#1B4C9F" />
          <div className="okta-help-item">Go to security tab</div>
          <FaLongArrowAltDown size={20} color="#1B4C9F" />
          <div className="okta-help-item">Click on Api</div>
          <FaLongArrowAltDown size={20} color="#1B4C9F" />
          <div className="okta-help-item">Click on Api tokens</div>
          <FaLongArrowAltDown size={20} color="#1B4C9F" />
          <div className="okta-help-item">Click generate</div>
        </div>
        <form id="okta-api-form" onSubmit={handleOktaApi}>
          <div className="col">
            <input
              value={input.domain}
              name="domain"
              onChange={onInputChange}
              type="text"
              placeholder="Enter OKTA Domain here"
              required
            />
            <input
              value={input.api}
              name="api"
              onChange={onInputChange}
              type="text"
              placeholder="Enter OKTA API Token here"
              required
            />
            <button className="auth-button small">Submit</button>
          </div>
        </form>
        <div className="auth-text row">
          <Link to="/" className="blue-text">
            Go Back to Home
          </Link>
        </div>
      </div>
      <div className="auth-right">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={require("../../assets/saasden.png")}
          alt="saasden"
        ></img>
      </div>
    </div>
  );
}

export default ConnectSSO;
