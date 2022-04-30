import React from "react";
import DashboardMainContent from "../../components/DashboardMainContent";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Home">
        <DashboardMainContent />
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
