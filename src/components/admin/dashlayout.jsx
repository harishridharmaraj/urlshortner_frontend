import React from "react";
import DashboardNav from "./dashboardnav";
import Dashsidebar from "./dashside";
import "../styles.css";

const DashLayout = ({ children }) => {
  return (
    <div>
      <DashboardNav />
      <div style={{ display: "flex", gap: "20px" }}>
        <Dashsidebar />
        <div className="dashboardcont">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
