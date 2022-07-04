import { React, useState, useEffect } from "react";

import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";

// function Teams() {
//   return (
//     <div className="dash-outlet nothing col">
//       <img src={require("../../assets/undraw.png")} />
//       Coming up soon...
//     </div>
//   );
// }

function Teams() {
  const [subData, setSubData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  async function handleGetSubs() {
    console.log("this function ran");
    await fetch("https://randomusesr.me/api/?nat=us&results=9&page=1")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setSubData(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }

  useEffect(() => {
    handleGetSubs();
  }, []);

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
          <div className="dash-top-name">abc</div>
          <div className="dash-top-item row">
            <MdSubscriptions />
            <div>
              <div className="">Subscriptions</div>
              <div className="dash-price">1</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <FaSortAmountUpAlt />
            <div>
              <div className="">Amount Spent</div>
              <div className="dash-price">$5</div>
            </div>
          </div>
          <div className="dash-top-item row">
            <HiOutlineCash />
            <div>
              <div className="">Save Upto </div>
              <div className="dash-price">$5</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="dashtop-hr bot" />

      <div className="dash-outlet">
        {isPending && <div className="pending">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {subData &&
          subData.map((ele, i) => {
            return (
              <div
                key={i}
                className="sub-container col"
                onClick={(e) => {
                  e.target.parentElement.classList.toggle("abc");
                }}
              >
                <div className="sub-top row">
                  <div className="sub-name">{ele.subname}</div>
                  <div
                    onClick={() => {
                      // handleDSub(ele.appId);
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
                  <button className="view-employees">View Employees</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Teams;
