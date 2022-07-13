import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { baseURL } from "../../api";

function EmpLi(props) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState("Error loading the content");

  function fetchEmpSub() {
    //   THIS FETCH WILL RETURN A LIST OF SUBSCRIPTIONS
    //   WITH THE FOLLOWING PARAMS appID, name, status
    fetch(`${baseURL}/employee/apps?usrID=${props.userID}`, {
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
        setData(d);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        console.log(err);
      });
  }

  useEffect(() => {
    fetchEmpSub();
  }, []);

  return (
    <div className="emp-info">
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
          {props.name}
        </div>
        <div></div>
      </div>
      <div className="sub-list col">
        {isPending && <div>Loading resources...</div>}
        {error && <div>Error Loading Resources... Please Refresh</div>}
        {data &&
          data.map((ele, i) => {
            return (
              <div className="sub-li row" key={i}>
                <div>{ele.name}</div>
                {ele.status === "ACTIVE" ? (
                  <div
                    className="remove-sub-emp"
                    onClick={() => {
                      props.handleDelEmpSub(ele.appID, props.userID);
                    }}
                  >
                    Remove
                  </div>
                ) : (
                  <div
                    className="remove-sub-emp"
                    onClick={() => {
                      props.handleAddSub(ele.appID);
                    }}
                  >
                    Add
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EmpLi;
