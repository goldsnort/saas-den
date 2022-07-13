import { React, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DashDefault(props) {
  const dashContext = useOutletContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <div className="dash-top">
        <div className="search-container row">
          <div className="search-container-heading">Dashboard</div>
          <div className="dash-top-search">
            <BiSearch />
            <input type="text" placeholder="Search for products" />
          </div>
          <button>Search</button>
        </div>
        <div className="info row">
          <div className="dash-top-name">{dashContext.username}</div>
          <div className="dash-top-item row">
            <MdSubscriptions />
            <div>
              <div className="">Dashboard</div>
              <div className="dash-price">{dashContext.num}</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <FaSortAmountUpAlt />
            <div>
              <div className="">Amount Spent</div>
              <div className="dash-price">${dashContext.amountSpent}</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <HiOutlineCash />
            <div>
              <div className="">Save Upto </div>
              <div className="dash-price">${dashContext.save}</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="dashtop-hr bot" />
      <div className="dash-outlet default col">
        <img src={require("../../assets/dash_illustration_1.png")} />
        <div className="dash-default-1">You are yet to select a folder</div>
        <div className="dash-default-2">
          Select a folder from the dashboard menu
        </div>
      </div>
    </div>
  );
}

export default DashDefault;
