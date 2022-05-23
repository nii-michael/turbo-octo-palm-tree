import React from "react";
import DashboardNav from "./DashboardNav";
import "./styles.css";

const DashboardWrapper = props => {
  return (
    <div className="dashboard-wrapper">
      <DashboardNav />
      {props.children}
    </div>
  );
};

export default DashboardWrapper;
