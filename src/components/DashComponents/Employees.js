import { React, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const dashContext = useOutletContext();
  let arr = new Array(5);
  for (const i of arr) {
    arr[i] = null;
  }

  function getSubs(userID) {
    let data;
    fetch(`http://localhost:3001/employee/apps?${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the empData (employee request)");
        }
        return res.json();
      })
      .then((d) => {
        data = d;
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }
  useEffect(() => {
    // TODO:AUTHORIZATION HERE
  }, []);
  return (
    <div>
      <div className="dash-top">
        <div className="search-container row">
          <div className="search-container-heading">Employees</div>
          <div className="dash-top-search">
            <BiSearch />
            <input
              type="text"
              placeholder="Search for employees"
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
        <div className="emp-container col">
          {dashContext.isEmpPending && <div>Loading resources...</div>}
          {dashContext.empError && <div>{dashContext.empError}</div>}
          {dashContext.empData &&
            dashContext.empData
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
                getSubs(ele.userID);
                return (
                  <div key={i} className="emp-info">
                    <div className="sub-top row">
                      <div className="sub-name row">
                        <BsChevronDown
                          size={25}
                          className="ai-down"
                          onClick={(e) => {
                            e.target.parentElement.parentElement.parentElement.classList.toggle(
                              "abcd"
                            );
                          }}
                        />
                        {ele.name}
                      </div>
                      <div></div>
                    </div>
                    <div className="sub-list col">
                      <div className="sub-li row">
                        <div>Figma</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                      <div className="sub-li row">
                        <div>Adobe Pro</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                      <div className="sub-li row">
                        <div>Google One Storage</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                      <div className="sub-li row">
                        <div>Office 365</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                      <div className="sub-li row">
                        <div>Notion Premium</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                      <div className="sub-li row">
                        <div>Linkedin Premium</div>
                        <button className="remove-sub-emp">Remove</button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Employees;
