import React from "react";

const Card = ({ title, number, icon }) => {
  return (
    <div className="dashboard-card">
      {icon}
      <div className="icon-body">
        <p className="card-title">
          {title}
        </p>
        <p className="card-desc">
          {number}
        </p>
      </div>
    </div>
  );
};

export default Card;
