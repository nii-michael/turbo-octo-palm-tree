import React from "react";
// import { ReactComponent as Bell } from "../assets/svgs/Bell.svg";
// import { ReactComponent as Profile } from "../assets/svgs/Profile.svg";
// import { ReactComponent as ChevronDownGreen } from "../assets/svgs/ChevronDownGreen.svg";

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
