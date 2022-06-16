import React from "react";
import "./Navbar.scss";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function Navbar({ menuOpen, setMenuOpen }) {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#introo" className="logo">
            Some Fancy Logo
          </a>
          <div className="item-container">
            <EmailRoundedIcon />
            <span>email address</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleClick}>
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
