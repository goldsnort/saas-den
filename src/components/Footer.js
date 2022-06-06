import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="row">
          <a href="/">
            <i class="fas fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fas fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fas fa-youtube"></i>
          </a>
          <a href="/">
            <i class="fas fa-twitter"></i>
          </a>
        </div>

        <div class="row">
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
          </ul>
        </div>

        <div class="row">
          SAASDEN Copyright © 2022 SaaSDen - All rights reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
