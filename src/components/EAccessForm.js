import React from "react";

import "./EAccessForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EAccessForm() {
  const notify = (e) => {
    e.preventDefault();
    toast.success("Your response has been recorded!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={notify}>
        <div className="form-heading">Get Early Access</div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="email" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Company Email</label>
        </div>
        <button className="button-6">Submit</button>
      </form>
    </div>
  );
}

export default EAccessForm;
