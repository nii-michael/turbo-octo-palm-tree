import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";

import { useSelector } from "react-redux";
import axios from "axios";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
const Reports = () => {
  const [prevWeek, setPrevWeek] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [weeks, setWeeks] = useState([]);

  const navigate = useNavigate();

  const fullName = useSelector(state => state.user.name);
  const username = useSelector(state => state.user.username);
  const region = useSelector(state => state.user.region);
  const token = useSelector(state => state.user.access_token);
  const userId = useSelector(state => state.user.userId);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/details/${username}/user/all`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios(config)
      .then(function(response) {
        setWeeks(response.data);
        // console.log(response.data.avg.$numberDecimal);
        // setPrevWeek(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);



  const handleClick = ele => {
    navigate(`/dashboard/reports/${ele.week}`, {state: ele});
  };


  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Reports">
        <div className="accounts-wrapper">
          <div className="dashboard-cards-wrapper">
            {weeks.map((ele, i) => {
              return (
                <div onClick={() => handleClick(ele)}>
                  <Card key={i} title={ele.week} number="Click to download" />
                </div>
              );
            })}
          </div>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Reports;
