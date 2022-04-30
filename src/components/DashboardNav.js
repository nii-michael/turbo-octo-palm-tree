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
              <Link to="/dashboard/entries" className="dashboard-nav-item">
                <i className="fa-solid fa-pen" />
                <span>Entries</span>
              </Link>
              <Link to="/dashboard/reports" className="dashboard-nav-item">
                <i className="fa-solid fa-file" />
                <span>Reports</span>
              </Link>
              <Link to="/" className="dashboard-nav-item">
                <i className="fa-solid fa-power-off red" />
                <span className="red">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
