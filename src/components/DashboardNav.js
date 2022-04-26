import React from "react";

import { Link } from "react-router-dom";
const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
      <div className="fixed">
        {/* <img src={logo} alt="syka logo" /> */}

        <nav>
          <ul>
            <li className="w-100">
              <Link to="/dashboard" className="dashboard-nav-item">
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
