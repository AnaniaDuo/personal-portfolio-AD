import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

function SocialButtons() {
  return (
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/anh-kaia-duong/" target="_blank">
        <img src={navIcon1} alt="LinkedIn Logo" />
      </a>
      <a href="https://github.com/AnaniaDuo" target="_blank">
        <img src={navIcon2} alt="Github Logo" />
      </a>
    </div>
  );
}

export default SocialButtons;
