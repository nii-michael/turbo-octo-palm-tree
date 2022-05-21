import React from "react";
import "./styles.css"
const DashboardMainWrapper = ({ children, name }) => {
  return (
    <div className="dashboard-main">
      <section id="dashboard-main-nav">
        <p>
          {name}
        </p>
        {/* <div className="dashboard-main-nav-icons">
          <Bell />
          <div className="profile-wrapper">
            <Profile />
            <span>John Doe</span>
            <ChevronDownGreen />
          </div>
        </div> */}
      </section>
      {children}
    </div>
  );
};

export default DashboardMainWrapper;
