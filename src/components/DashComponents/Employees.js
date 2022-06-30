import { React, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";

function Employees() {
  const [username, setUsername] = useState("Rushant");

  let empData = [
    {
      empName: "Rushant",
      empSub: [
        "Figma",
        "Adobe Pro",
        "Google One Storage",
        "Office 365",
        "Spotify Premium",
      ],
    },
  ];

  return (
    <div>
      <div className="dash-top">
        <div className="search-container row">
          <div className="search-container-heading">Employees</div>
          <div className="dash-top-search">
            <BiSearch />
            <input type="text" placeholder="Search for employees" />
          </div>
          <button>Search</button>
        </div>
        <div className="info row">
          <div className="dash-top-name">{username}</div>
          <div className="dash-top-item row">
            <MdSubscriptions />
            <div>
              <div className="">Subscriptions</div>
              <div className="dash-price">6</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <FaSortAmountUpAlt />
            <div>
              <div className="">Amount Spent</div>
              <div className="dash-price">$183.30</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <HiOutlineCash />
            <div>
              <div className="">Save Upto </div>
              <div className="dash-price">$26.34</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="dashtop-hr bot" />
      <div className="dash-outlet">
        <div className="emp-container col">
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Rushant Ashtputre</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Figma</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Adobe Pro</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Office 365</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Aryaman Singh</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Figma</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Adobe Pro</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Chuckwunonso Obidike</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Office 365</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Dheeraj Kumar</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Office 365</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Nishit Pandit</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Office 365</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
          <div className="margin">
            <div
              className="sub-top row"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abcd");
              }}
            >
              <div className="sub-name">Vadiraj</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Google One Storage</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Office 365</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Notion Premium</div>
              <div>Remove</div>
            </div>
            <div className="sub-list row">
              <div>Linkedin Premium</div>
              <div>Remove</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
