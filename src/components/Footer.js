import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <a href="https://www.linkedin.com/company/saaasden/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/saaasden/">
                Contact us
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/saaasden/">
                rushant@sassden.club
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/saaasden/">
                +91-9513843202
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          SAASDEN Copyright © 2022 SaaSDen - All rights reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
