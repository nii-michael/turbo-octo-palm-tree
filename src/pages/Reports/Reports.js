import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import "./styles.css";
const Reports = () => {
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Reports">
        <div className="accounts-wrapper" />
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Reports;
