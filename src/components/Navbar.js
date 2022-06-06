import { useState, React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Link as SLink } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="home">
      <nav>
        <div className={click ? "navbar-container active" : "navbar-container"}>
          <div className="menu-switch" onClick={handleClick}>
            <i className="fas fa-bars fa-2x" />
          </div>
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img
                className="navbar-logo-img"
                src={require("../components/logo.png")}
                alt="logo"
              ></img>
            </Link>

            <div
              className={
                click ? "navbar-left-items active" : "navbar-left-items"
              }
            >
              <div
                className={
                  click
                    ? "navbar-left-items-list active"
                    : "navbar-left-items-list"
                }
              >
                <SLink
                  activeClass="active"
                  to="home-desc"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Features
                </SLink>
                <SLink
                  activeClass="active"
                  to="home-plans"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Pricing
                </SLink>
                <Link to="/">Blogs</Link>
                <SLink
                  activeClass="active"
                  to="about-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Us
                </SLink>
              </div>
              <Link to="/early-access" className="navbar-btn">
                <button className="get-early-access-btn">
                  Get Early Access
                </button>
              </Link>
            </div>
          </div>
          <div> </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
