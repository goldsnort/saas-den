import { useState, React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Link as SLink } from "react-scroll";
import { FiMenu } from "react-icons/fi";

function Navbar() {
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
            src={require("../../assets/saasden.png")}
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
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/">Resources</Link>
            </SLink>

            <SLink
              activeClass="active"
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              onClick={negateClick}
            >
              <Link to="/dashboard">Dashboard</Link>
            </SLink>
          </div>
          <div className="navbar-btn">
            <button onClick={negateClick} className="sign-out-btn">
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default Navbar;
