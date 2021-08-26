import React, { useRef } from "react";

import Siderbar from "../Sidebar/Siderbar";

import hamburgerMenu from "../../assets/images/hamburger.svg";
import cart from "../../assets/images/cart.svg";

import "./Navbar.scss";

const Navbar = () => {
  const sidebarRef = useRef();

  const sidebarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <>
      <Siderbar sidebarRef={sidebarRef} />

      <nav className="nav">
        <img
          src={hamburgerMenu}
          alt="menu"
          className="nav__image"
          onClick={sidebarHandler}
        ></img>

        <h2>
          <span>Lorem</span>
        </h2>

        <img src={cart} alt="cart" className="nav__image"></img>
      </nav>
    </>
  );
};

export default Navbar;
