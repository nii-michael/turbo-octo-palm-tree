import React from "react";
import Card from "../components/Card";
import "./styles.css";
const DashboardMainContent = () => {
  var cards = [
    {
      title: "Your Retailers",
      number: "500",
      icon: <i class="fa-solid fa-user-group" />
    },
    {
      title: "Zone",
      number: "Zone Name",
      icon: <i class="fa-solid fa-user-group" />
    },
    {
      title: "Custodian",
      number: "Name",
      icon: <i class="fa-solid fa-user" />
    },
    {
      title: "Total Ticket Sale %",
      number: "%25",
      icon: <i class="fa-solid fa-chart-line" />
    }
  ];
  return (
    <div className="main-wrapper">
      <p>hello</p>
      <div className="dashboard-cards-wrapper">
        {cards.map((ele, i) => {
          return <Card key={i} title={ele.title} number={ele.number} icon={ele.icon} />;
        })}
      </div>
    </div>
  );
};

export default DashboardMainContent;
