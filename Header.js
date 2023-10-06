import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header ">
      <input type="text" placeholder="Search" className="textarea"></input>
      <a href="#" className="btn"> Home </a>
      <a href="#" className="btn"> Shop </a>
      <a href="#" className="btn">
        {" "}
        Login{" "}
      </a>
      <a href="#" className="btn">
        {" "}
        Signup{" "}
      </a>
    </div>
  );
}

export default Header;
