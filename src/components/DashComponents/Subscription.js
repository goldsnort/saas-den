import { React, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import ProgressBar from "@ramonak/react-progress-bar";
import { useOutletContext } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

function Subscription() {
  const [searchTerm, setSearchTerm] = useState("");
  const dashContext = useOutletContext();

  useEffect(() => {
    // TODO:AUTHORIZATION HERE
  }, []);

  return (
    <div>
      <div className="dash-top">
        <div className="search-container row">
          <div className="search-container-heading">Subscriptions</div>
          <div className="dash-top-search">
            <BiSearch />
            <input
              type="text"
              placeholder="Search for products"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <button>Search</button>
        </div>
        <div className="info row">
          <div className="dash-top-name">{dashContext.username}</div>
          <div className="dash-top-item row">
            <MdSubscriptions />
            <div>
              <div className="">Subscriptions</div>
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
      <div className="dash-outlet">
        {dashContext.isSubPending && <div>Loading resources...</div>}
        {dashContext.subError && <div>{dashContext.subError}</div>}
        {dashContext.subData &&
          dashContext.subData
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.appName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((ele, i) => {
              return (
                <div key={i} className="sub-container col">
                  <div className="sub-top row">
                    <div className="sub-name row">
                      <BsChevronDown
                        size={25}
                        className="ai-down"
                        onClick={(e) => {
                          e.target.parentElement.parentElement.parentElement.classList.toggle(
                            "abc"
                          );
                        }}
                      />
                      {ele.appName}
                    </div>
                    {ele.status === "ACTIVE" ? (
                      <div
                        className="remove-add-sub-button"
                        onClick={() => {
                          dashContext.handleDelSub(ele.appID);
                        }}
                      >
                        Remove
                      </div>
                    ) : (
                      <div
                        className="remove-add-sub-button"
                        onClick={() => {
                          dashContext.handleAddSub(ele.appID);
                        }}
                      >
                        Add
                      </div>
                    )}
                  </div>
                  <div className="sub-info col">
                    <div className="sub-info-top row">
                      <div className="sub-info-rect row">
                        <div>Total Amount</div>
                        <div>${ele.total_amount}</div>
                      </div>
                      <div className="sub-info-rect row">
                        <div>No. Of Licenses Paid For</div>
                        <div>{ele.licences_purchased}</div>
                      </div>
                    </div>
                    <div className="sub-info-bot row">
                      <div className="sub-info-rect row">
                        <div>Next Renewal Date</div>
                        <div>{ele.renewalDate}</div>
                      </div>
                      <div className="sub-info-rect row">
                        <div>No Of Active Licenses</div>
                        <div>{ele.licences_used}</div>
                      </div>
                    </div>
                    Percentage Utilization
                    <ProgressBar
                      className="progress-bar"
                      completed={parseInt(
                        (ele.licences_used / ele.licences_purchased) * 100
                      )}
                    />
                    <button
                      onClick={(e) => {
                        e.target.parentElement.parentElement.classList.toggle(
                          "emp"
                        );
                      }}
                      className="view-employees"
                    >
                      View Employees
                    </button>
                  </div>
                  <div className="sub-emp col">
                    {ele.users.map((e, i) => {
                      return (
                        <div key={i} className="emp-li row">
                          <div className="emp-name">{e.name}</div>
                          <button
                            className="emp-remove-btn"
                            onClick={() => {
                              dashContext.handleDelEmpSub(ele.appID, e.userID);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                    <button
                      onClick={(e) => {
                        e.target.parentElement.parentElement.classList.toggle(
                          "emp"
                        );
                      }}
                      className="view-info"
                    >
                      View Information
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Subscription;
