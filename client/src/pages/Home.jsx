import React from "react";
import Navbar from "../components/Navbar";
import DashboardLayouts from "../components/DashboardLayouts";

const Home = () => {
  return (
    <DashboardLayouts activeMenu={'Contacts'}>
      <p>Home</p>
    </DashboardLayouts>
  );
};

export default Home;
