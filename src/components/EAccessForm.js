import React from "react";

import "./EAccessForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EAccessForm() {
  const notify = () => {
    console.log("this is running");
    toast.success("Your response has been recorded!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <form>
        <div className="form-heading">Get Early Access</div>
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
          <label>Company Email</label>
        </div>
        <button className="button-6" onClick={notify}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EAccessForm;
