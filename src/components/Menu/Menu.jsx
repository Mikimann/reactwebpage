import React from "react";
import "../Menu/Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const hideMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={hideMenu}>
          <a href="#introo">Home</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#portofolio">Projects</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
