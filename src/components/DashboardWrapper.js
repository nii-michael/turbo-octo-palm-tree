import React from "react";
import DashboardNav from "./DashboardNav";
<<<<<<< HEAD
=======
import "./styles.css";
>>>>>>> e1f21a9febbbda461e7d3f55cb7b126b405f79a7

const DashboardWrapper = props => {
  return (
    <div className="dashboard-wrapper">
      <DashboardNav />
      {props.children}
    </div>
  );
};

export default DashboardWrapper;
