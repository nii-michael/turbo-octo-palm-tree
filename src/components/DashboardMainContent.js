import React from "react";
import Card from "../components/Card";
import "./styles.css";
const DashboardMainContent = () => {
  var cards = [
    {
      title: "Your Retailers",
      number: "500",
      icon: <i className="fa-solid fa-user-group" />
    },
    {
      title: "Zone",
      number: "Zone Name",
      icon: <i className="fa-solid fa-user-group" />
    },
    {
      title: "Custodian",
      number: "Name",
      icon: <i className="fa-solid fa-user" />
    },
    {
      title: "Total Ticket Sale %",
      number: "%25",
      icon: <i className="fa-solid fa-chart-line" />
    }
  ];
  return (
    <div id="dashboard-main-content">
      <div className="dashboard-cards-wrapper">
        {cards.map((ele, i) => {
          return <Card key={i} title={ele.title} number={ele.number} icon={ele.icon} />;
        })}
      </div>
    </div>
  );
};

export default DashboardMainContent;
