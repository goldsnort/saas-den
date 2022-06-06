import React from "react";
import "./EAccessForm.css";

function EAccessForm() {
  return (
    <div className="container">
      <form>
        <div className="form-heading">Get Early Access!!!</div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <button className="button-6">Submit</button>
      </form>
    </div>
  );
}

export default EAccessForm;
