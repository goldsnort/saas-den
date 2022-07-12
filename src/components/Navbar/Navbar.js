import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link as SLink } from "react-scroll";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const negateClick = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else setNavbar(false);
  };

  const handleSignout = () => {
    localStorage.clear();
    fetch("http://localhost:3001/logout", {
      method: "GET",
      credentials: "include",
    }).then((res) => {
      if (!res.ok) {
        console.log("error!!! logout failed");
      } else {
        console.log("successfully logged out");
      }
    });
    navigate("/");
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        click
          ? navbar
            ? "navbar-container active true"
            : "navbar-container active"
          : navbar
          ? "navbar-container true"
          : "navbar-container"
      }
    >
      <div className="menu-switch" onClick={handleClick}>
        <FiMenu />
      </div>
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img
            className="navbar-logo-img"
            src={require("../../assets/logo_saasden.png")}
            alt="logo"
            onClick={negateClick}
          ></img>
        </Link>

        <div
          className={click ? "navbar-left-items active" : "navbar-left-items"}
        >
          <div
            className={
              click ? "navbar-left-items-list active" : "navbar-left-items-list"
            }
          >
            <SLink
              activeClass="active"
              to="home-desc"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/">Products</Link>
            </SLink>

            <SLink
              activeClass="active"
              to="home-plans"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/">Pricing</Link>
            </SLink>

            <SLink
              activeClass="active"
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/">About us</Link>
            </SLink>

            <SLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/dashboard">Dashboard</Link>
            </SLink>
          </div>
          <div className="navbar-btn">
            {localStorage.getItem("token") ? (
              <button
                onClick={() => {
                  negateClick();
                  handleSignout();
                }}
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  negateClick();
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default Navbar;
