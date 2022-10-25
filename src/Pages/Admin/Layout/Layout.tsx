import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "../../../Components/Container/MainContainer";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import useUIStore from "../../../Store/uiStore";

const Layout: React.FC = () => {
  const isMinimizeSidebar = useUIStore((state) => state.isMinimizeSidebar);
  return (
    <>
      <Sidebar />
      <div
        className={`ae-prime-wrapper ${isMinimizeSidebar ? "maximized" : ""}`}
      >
        <div className="ae-prime-container">
          <MainContainer>
            <Outlet />
          </MainContainer>
        </div>
      </div>
    </>
  );
};

export default Layout;
