import { useState, React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Link as SLink } from "react-scroll";

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
    <div>
      <nav>
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
            <i className="fas fa-bars fa-2x" />
          </div>
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img
                className="navbar-logo-img"
                src={require("../images/logo.png")}
                alt="logo"
                onClick={negateClick}
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
                  onClick={negateClick}
                >
                  <Link to="/">Features</Link>
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

                <Link to="/">Blogs</Link>

                <SLink
                  activeClass="active"
                  to="about-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={negateClick}
                >
                  <Link to="/">About Us</Link>
                </SLink>
              </div>
              <Link to="/early-access" className="navbar-btn">
                <button onClick={negateClick} className="get-early-access-btn">
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
