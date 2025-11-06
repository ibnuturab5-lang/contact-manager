import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayouts = ({ children, activeMenu }) => {
  return (
    <div className="mx-auto  w-full">
      <Navbar activeMenu={activeMenu} />
      <div className="flex ">
        
          <Sidebar activeMenu={activeMenu} />
     
        <div className="mt-24 sm:ml-56 bg-white p-3 rounded-md flex-1 shadow-md max-w-[96%]  mx-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
