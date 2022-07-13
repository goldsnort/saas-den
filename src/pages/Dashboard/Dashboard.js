import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { baseURL } from "../../api";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [subData, setSubData] = useState(null);
  const [isSubPending, setIsSubPending] = useState(true);
  const [subError, setSubError] = useState(null);
  const [empData, setEmpData] = useState(null);
  const [isEmpPending, setIsEmpPending] = useState(true);
  const [empError, setEmpError] = useState(null);
  const [amountSpent, setAmountSpent] = useState("-");
  const [save, setSave] = useState("-");
  const [num, setNum] = useState("-");
  const [render, setRender] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "username"
  );

  const notify = (e) => {
    console.log(e);
    toast.error("Error in updation, please try again");
  };

  function calcHead(d) {
    let amountSpent1 = 0;
    let save1 = 0;
    for (let e of d) {
      amountSpent1 += e.total_amount;
      save1 +=
        (e.licences_purchased - e.licences_used) *
        (e.total_amount / e.licences_purchased);
    }
    setAmountSpent(amountSpent1);
    setSave(save1);
    setNum(d.length);
  }

  function fetchSub() {
    fetch(`${baseURL}/subscription`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 420) {
          navigate("/login-sso");
        } else if (res.status === 421) {
          window.location.href = `${baseURL}/xero/refreshXeroToken`;
        } else if (res.status === 422) {
          navigate("/login-exp");
        }
        return res.json();
      })
      .then((d) => {
        setSubData(d);
        calcHead(d);
        setIsSubPending(false);
        setSubError(null);
      })
      .catch((err) => {
        setIsSubPending(false);
        setSubError(err.message);
        console.log(err);
      });
  }

  function fetchEmp() {
    fetch(`${baseURL}/employee`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 420) {
          navigate("login-sso");
        } else if (res.status === 421) {
          window.location.href = `${baseURL}/xero/refreshXeroToken`;
        } else if (res.status === 422) {
          navigate("/login-exp");
        }
        return res.json();
      })
      .then((d) => {
        setEmpData(d);
        setIsEmpPending(false);
        setEmpError(null);
      })
      .catch((err) => {
        setIsEmpPending(false);
        setEmpError(err.message);
        console.log(err);
      });
  }

  function handleDelSub(appID) {
    fetch(`${baseURL}/subscription/app/deactivate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
          "https://saasden-backend.herokuapp.com",
          "http://localhost:4000",
          `${baseURL}`,
          "https://login.xero.com",
        ],
        token: localStorage.getItem("token"),
      },
      credentials: "include",
      body: JSON.stringify({
        appID: `${appID}`,
      }),
    })
      .then((res) => {
        if (res.status === 420) {
          navigate("login-sso");
        } else if (res.status === 421) {
          window.location.href = `${baseURL}/xero/refreshXeroToken`;
        } else if (res.status === 422) {
          navigate("/login-exp");
        }
        if (res.ok === true) {
          console.log("deletion of the sub was successful");
          setSubData(null);
          setEmpData(null);
          setIsEmpPending(true);
          setIsSubPending(true);
          setSubError(null);
          setEmpError(null);
          setRender(!render);
        } else {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddSub(appID) {
    fetch(`${baseURL}/subscription/app/activate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
          "https://saasden-backend.herokuapp.com",
          "http://localhost:4000",
          `${baseURL}`,
          "https://login.xero.com",
        ],
        token: localStorage.getItem("token"),
      },
      credentials: "include",
      body: JSON.stringify({
        appID: `${appID}`,
      }),
    })
      .then((res) => {
        if (res.status === 420) {
          navigate("login-sso");
        } else if (res.status === 421) {
          window.location.href = `${baseURL}/xero/refreshXeroToken`;
        } else if (res.status === 422) {
          navigate("/login-exp");
        }
        if (res.ok === true) {
          console.log("activation of the sub was successful");
          setSubData(null);
          setEmpData(null);
          setIsEmpPending(true);
          setIsSubPending(true);
          setSubError(null);
          setEmpError(null);
          setRender(!render);
        } else {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelEmpSub(appID, userID) {
    fetch(`${baseURL}/subscription/employee/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
          "https://saasden-backend.herokuapp.com",
          "http://localhost:4000",
          `${baseURL}`,
          "https://login.xero.com",
        ],
        token: localStorage.getItem("token"),
      },
      credentials: "include",
      body: JSON.stringify({
        appID: `${appID}`,
        usrID: `${userID}`,
      }),
    })
      .then((res) => {
        if (res.status === 420) {
          navigate("login-sso");
        } else if (res.status === 421) {
          window.location.href = `${baseURL}/xero/refreshXeroToken`;
        } else if (res.status === 422) {
          navigate("/login-exp");
        }
        if (res.ok === true) {
          console.log(
            "Removal of the employee from this subscription was successful"
          );
          setSubData(null);
          setEmpData(null);
          setIsEmpPending(true);
          setIsSubPending(true);
          setSubError(null);
          setEmpError(null);
          setRender(!render);
        } else {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchSub();
      fetchEmp();
    } else {
      navigate("/login");
    }
  }, [render, navigate]);

  return (
    <div className="dash-container">
      <Sidebar />
      <div className="dash-right col">
        <Navbar />
        <hr className="dashtop-hr" />
        <Outlet
          context={{
            subData,
            setSubData,
            isSubPending,
            setIsSubPending,
            subError,
            setSubError,
            empData,
            setEmpData,
            isEmpPending,
            setIsEmpPending,
            empError,
            setEmpError,
            amountSpent,
            setAmountSpent,
            save,
            setSave,
            num,
            setNum,
            fetchSub,
            username,
            setRender,
            handleDelSub,
            handleAddSub,
            handleDelEmpSub,
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
