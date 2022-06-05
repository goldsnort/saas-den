import { useState, React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
                <Link to="/">Features</Link>
                <Link to="/">Pricing</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">About Us</Link>
              </div>
              <Link to="/" className="navbar-btn">
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
