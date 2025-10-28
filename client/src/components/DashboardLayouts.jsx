import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayouts = ({ children, activeMenu }) => {
  return (
    <div className="bg-slate-100">
      <Navbar activeMenu={activeMenu} />
      <div className="flex ">
        <Sidebar activeMenu={activeMenu} />
        <div className="mt-24 ml-56 bg-white p-3 rounded-md flex-1 h-screen ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
