import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

function handleOktaApi() {
  console.log("khi khi");
}

function ConnectSSO() {
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
          <div className="row">
            <input type="text" placeholder="Enter API key here" />
            <button className="auth-button small">Submit</button>
          </div>
        </form>
      </div>
      <div className="auth-right">
        <img src={require("../../assets/saasden.png")} alt="saasden"></img>
      </div>
    </div>
  );
}

export default ConnectSSO;
