import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import BrandImage from "../../assets/images/gs-logo-half.png";
import { SidebarList } from "./SidebarList";

const Sidebar = () => {
  return (
    <>
      <div className="ae-navbar">
        <div className="ae-sidebar-trigger">
          <AiOutlineMenu className="ae-icon" />
        </div>
        <div className="ae-navbar-group right">
          <CgProfile className="ae-icon" />
          <Link to={"/admin/:id"}>
            <div className="ae-greetings">Admin</div>
          </Link>
          <div className="ae-navbar-button">Log Out</div>
        </div>
      </div>
      <div className="ae-sidebar-wrapper" id="mainSidebar">
        <div className="ae-sidebar-header" id="desktopMenuTrigger">
          <img src={BrandImage} alt="brand" className="brand-image" />
          <p>ARCHELON</p>
        </div>
        <ul className="ae-sidebar-button-container">
          {SidebarList.map((item, index) => (
            <Link to={item.link} key={index}>
              <li className="ae-sidebar-button">
                <span className="ae-span-icon">
                  {<item.icon className="ae-icon" />}
                </span>
                <p>{item.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
