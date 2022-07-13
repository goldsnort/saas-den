import { React, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";
import EmpLi from "./EmpLi";
import { useNavigate } from "react-router-dom";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const dashContext = useOutletContext();
  let arr = new Array(5);
  for (const i of arr) {
    arr[i] = null;
  }

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
          {dashContext.empError && (
            <div className="loading-error-txt">
              Error Loading Resources... Please Refresh
            </div>
          )}
          {dashContext.empData &&
            dashContext.empData
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((ele, i) => {
                return (
                  <EmpLi
                    name={ele.name}
                    userID={ele.userID}
                    Key={i}
                    handleDelEmpSub={dashContext.handleDelEmpSub}
                    handleAddSub={dashContext.handleAddSub}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Employees;
