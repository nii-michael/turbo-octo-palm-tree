import React from "react";
import "./styles.css";
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
                <i className="fa-solid fa-earth-africa" />
                <span>Home</span>
              </Link>
              <Link to="/entries" className="dashboard-nav-item">
                <i className="fa-solid fa-pen" />
                <span>Entries</span>
              </Link>
              <Link to="/reports" className="dashboard-nav-item">
              <i className="fa-solid fa-file"></i>
                <span>Reports</span>
              </Link>
              <Link to="/login" className="dashboard-nav-item">
                <i className="fa-solid fa-power-off" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
