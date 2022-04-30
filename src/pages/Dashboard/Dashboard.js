import React from "react";
import DashboardMainContent from "../../components/DashboardMainContent";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const token = useSelector(state => state.user.access_token);


  if(!token){
    
  }
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Home">
        <DashboardMainContent />
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
