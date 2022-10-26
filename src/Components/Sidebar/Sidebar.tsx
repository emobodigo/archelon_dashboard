import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import BrandImage from "../../assets/images/gs-logo-half.png";
import { ARCHELON_VERSION_TITLE, PROJECT_BUILD } from "../../config/config";
import useUIStore from "../../Store/uiStore";
import { SidebarList } from "./SidebarList";

const Sidebar = () => {
  // const isMinimizeSidebar = useUIStore((state) => state.isMinimizeSidebar);
  // const toggleMinimizeSidebar = useUIStore(
  //   (state) => state.toggleMinimizeSidebar
  // );
  const {
    isExpandedMobile,
    toggleExpandedMobile,
    toggleMinimizeSidebar,
    isMinimizeSidebar,
  } = useUIStore();
  return (
    <>
      <div className="ae-navbar">
        <div className="ae-sidebar-trigger" onClick={toggleExpandedMobile}>
          <AiOutlineMenu style={{ height: 40, width: 40, marginTop: 4 }} />
        </div>
        <div className="ae-navbar-group right">
          <CgProfile className="ae-icon" />
          <Link to={"/admin/:id"}>
            <div className="ae-greetings">Admin</div>
          </Link>
          <div className="ae-navbar-button">Log Out</div>
        </div>
      </div>
      <div
        className={`ae-sidebar-wrapper ${
          isMinimizeSidebar ? "minimized" : ""
        } ${isExpandedMobile ? "expanded" : ""}`}
      >
        <div className="ae-sidebar-header" onClick={toggleMinimizeSidebar}>
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
        <div className="ae-sidebar-footer">
          <a
            href="https://www.coralisstudio.com/tech"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="version-text ae-caption"
              ae-caption={`Project Build: ${PROJECT_BUILD}`}
            >
              {ARCHELON_VERSION_TITLE} <br />
              &copy; 2018 Coralis Studio
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
