import { React, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import ProgressBar from "@ramonak/react-progress-bar";

function Subscription() {
  const [username, setUsername] = useState("Rushant");

  let subData = [
    {
      appId: "figma123",
      subname: "Figma",
      Amount: "12",
      noOfLicense: "5",
      nextRenewal: "01/08/2022",
      activeLicense: "4",
      employees: [
        "Aryaman Singh",
        "Chuckwunonso Obidike",
        "Dheeraj Kumar",
        "Rushant Ashtputre",
      ],
    },
    {
      appId: "netflix_india",
      subname: "Netflix",
      Amount: "6.8",
      noOfLicense: "4",
      nextRenewal: "10/08/2022",
      activeLicense: "4",
      employees: [
        "Aryaman Singh",
        "Nishit Pandit",
        "Vadiraj",
        "Rushant Ashtputre",
      ],
    },
    {
      appId: "google-one-storage",
      subname: "Google One Storage",
      Amount: "1.65",
      noOfLicense: "6",
      nextRenewal: "13/08/2022",
      activeLicense: "5",
      employees: [
        "Aryaman Singh",
        "Chuckwunonso Obidike",
        "Dheeraj Kumar",
        "Nishit Pandit",
        "Rushant Ashtputre",
      ],
    },
    {
      appId: "amazon-prime",
      subname: "Amazon Prime",
      Amount: "2.27",
      noOfLicense: "5",
      nextRenewal: "05/08/2022",
      activeLicense: "5",
      employees: [
        "Chuckwunonso Obidike",
        "Dheeraj Kumar",
        "Nishit Pandit",
        "Rushant Ashtputre",
        "Vadiraj",
      ],
    },
    {
      appId: "spotify-premium",
      subname: "Spotify Premium",
      Amount: "2.28",
      noOfLicense: "5",
      nextRenewal: "01/08/2022",
      activeLicense: "5",
      employees: [
        "Aryaman Singh",
        "Chuckwunonso Obidike",
        "Dheeraj Kumar",
        "Nishit Pandit",
        "Rushant Ashtputre",
      ],
    },

    {
      appId: "linkedin-premium",
      subname: "Linkedin premium",
      Amount: "12.69",
      noOfLicense: "5",
      nextRenewal: "01/07/2023",
      activeLicense: "4",
      employees: [
        "Aryaman Singh",
        "Chuckwunonso Obidike",
        "Nishit Pandit",
        "Rushant Ashtputre",
      ],
    },
  ];

  const [dataState, setDataState] = useState(subData);

  let subscription = "",
    amountSpent = 0,
    saveUpto = 0;
  function createTop(a) {
    subscription = a.length;
    for (let x of a) {
      amountSpent += parseFloat(x.Amount) * parseFloat(x.noOfLicense);
      saveUpto +=
        parseFloat(x.Amount) *
        (parseFloat(x.noOfLicense) - parseFloat(x.employees.length));
    }
  }
  async function abc() {
    await createTop(dataState);
  }
  abc();

  function handleDSub(id) {
    let newData = dataState.filter((ele) => ele.appId != id);
    setDataState(newData);
  }

  return (
    <div>
      <div className="dash-top">
        <div className="search-container row">
          <div className="search-container-heading">Subscriptions</div>
          <div className="dash-top-search">
            <BiSearch />
            <input type="text" placeholder="Search for products" />
          </div>
          <button>Search</button>
        </div>
        <div className="info row">
          <div className="dash-top-name">{username}</div>
          <div className="dash-top-item row">
            <MdSubscriptions />
            <div>
              <div className="">Subscriptions</div>
              <div className="dash-price">{subscription}</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <FaSortAmountUpAlt />
            <div>
              <div className="">Amount Spent</div>
              <div className="dash-price">${amountSpent.toFixed(2)}</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <HiOutlineCash />
            <div>
              <div className="">Save Upto </div>
              <div className="dash-price">${saveUpto.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="dashtop-hr bot" />
      <div className="dash-outlet">
        {dataState.map((ele, i) => {
          return (
            <div
              id={i}
              className="sub-container col"
              onClick={(e) => {
                e.target.parentElement.classList.toggle("abc");
              }}
            >
              <div className="sub-top row">
                <div className="sub-name">{ele.subname}</div>
                <div
                  onClick={() => {
                    handleDSub(ele.appId);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Remove
                </div>
              </div>
              <div className="sub-info col">
                <div className="sub-info-top row">
                  <div className="sub-info-rect row">
                    <div>Total Amount</div>
                    <div>${(ele.Amount * ele.noOfLicense).toFixed(2)}</div>
                  </div>
                  <div className="sub-info-rect row">
                    <div>No. Of Licenses Paid For</div>
                    <div>{ele.noOfLicense}</div>
                  </div>
                </div>
                <div className="sub-info-bot row">
                  <div className="sub-info-rect row">
                    <div>Next Renewal Date</div>
                    <div>{ele.nextRenewal}</div>
                  </div>
                  <div className="sub-info-rect row">
                    <div>No Of Active Licenses</div>
                    <div>{ele.employees.length}</div>
                  </div>
                </div>
                Percentage Utilization
                <ProgressBar
                  className="progress-bar"
                  completed={parseInt(
                    (ele.activeLicense / ele.noOfLicense) * 100
                  )}
                />
                {console.log(ele.subname, ele.activeLicense / ele.noOfLicense)}
                <button className="view-employees">View Employees</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subscription;
