import React from "react";
import { Link, Outlet } from "react-router-dom";

import logoWhite from "../../assets/images/logo_white.png";
import box from "../../assets/images/box.png";
import Story from "../Story/Story";
import "./Sidebar.css";

const Sidebar = ({ background }) => {
  return (
    <div className="container_main">
      <div className={`sidebar ${background} `}>
        <div className="logo">
          <Link to="/">
            <img src={logoWhite} alt="logoWhite" />
          </Link>
        </div>
        <Story />
        <div className="sidebar_header">
          <h2>Create multiple sub-account</h2>
          <p>
            Organise your business finances easily with multiple accounts. No
            limits!
          </p>
        </div>
        <div className="img_box_wrapper">
          <img src={box} alt="box" />
        </div>
        <small className="copyright">© 2020 Prospa Inc</small>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
