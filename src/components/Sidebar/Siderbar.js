import React from "react";

import { items } from "../../assets/data";

import closeIcon from "../../images/icon-close.svg";

import "./Sidebar.scss";

const Siderbar = ({ sidebarRef }) => {
  const closeSideBarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar__toggle">
        <img src={closeIcon} alt={closeIcon} onClick={closeSideBarHandler} />
      </div>

      <ul className="sidebar__items">
        {items.map((item) => (
          <li className="sidebar__item">
            <a className="sidebar__links">{item}</a>
          </li>
        ))}
      </ul>

      <button className="btn">Cart</button>
    </aside>
  );
};

export default Siderbar;
