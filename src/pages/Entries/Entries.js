import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";
import { PulseSpinner } from "react-spinners-kit";

import "./styles.css";
import axios from "axios";
const Entries = () => {
  const [name, setName] = useState("");
  const [retailer, setRetailer] = useState("");
  const [amount, setAmount] = useState("");
  const [contribution, setContribution] = useState("");
  const [people, setPeople] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [week, setWeek] = useState("");
  const [deployed, setDeployed] = useState("");
  const [active, setActive] = useState("");
  const [inactive, setInactive] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [avg, setAvg] = useState("");
  const [call, setCall] = useState("");
  const [visitation, setVisitation] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
  const [day4, setDay4] = useState("");
  const [day5, setDay5] = useState("");
  const [day6, setDay6] = useState("");
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(false);

  const fullName = useSelector(state => state.user.name);
  const region = useSelector(state => state.user.region);
  const token = useSelector(state => state.user.access_token);
  const userId = useSelector(state => state.user.userId);

  useEffect(
    () => {
      if (people.length >= 10) {
        setDisabled(true);
      } else {
        if (
          name.length < 3 ||
          retailer.length < 1 ||
          amount.length < 1 ||
          contribution.length < 1
        ) {
          setDisabled(true);
        } else {
          setDisabled(false);
        }
      }
    },
    [name, retailer, contribution, amount, people]
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Ee");
    setPeople([
      ...people,
      {
        name,
        retailer,
        amount,
        contribution
      }
    ]);
    e.target.reset();
    setDisabled(true);
  };

  const handleClick = () => {
    setLoading(true);

    var data = JSON.stringify({
      week,
      deployed,
      active,
      inactive,
      totalTickets,
      avg,
      call,
      visitation,
      day1,
      day2,
      day3,
      day4,
      day5,
      day6,
      total,
      retailers: people
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/details/add/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function(response) {
        setWeek("");
        setDeployed("");
        setActive("");
        setInactive("");
        setTotalTickets("");
        setAvg("");
        setCall("");
        setDay1("");
        setDay2("");
        setDay3("");
        setDay4("");
        setDay5("");
        setDay6("");
        setTotal("");
        setCall("");
        setVisitation("");
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Entries">
        <div className="accounts-wrapper">
          <div className="custodian-wrapper">
            <div className="custodian-grid">
              <div className="custom-input-wrapper">
                <label htmlFor="name">Region: </label>
                <br />
                <input
                  className="auth-input auto"
                  type="text"
                  placeholder={region}
                  disabled
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Custodian</label>
                <br />
                <input
                  className="auth-input auto"
                  type="text"
                  placeholder={fullName}
                  disabled
                />
              </div>
            </div>
            <div className="custom-input-wrapper">
              <label htmlFor="name">Week: </label>
              <br />
              <input
                onChange={e => setWeek(e.target.value)}
                value={week}
                type="week"
              />
            </div>
          </div>
          <div className="details">
            <div className="details-line">
              <p className="detail-header ">DETAILS OF WEEK</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
              <p className="detail-header center">CHANGE</p>
            </div>
            <div className="details-line">
              <p className="detail-header"># of TPMs Deployed</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDeployed(e.target.value)}
                value={deployed}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of Active TPMs</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setActive(e.target.value)}
                value={active}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of InActive TPMs</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setInactive(e.target.value)}
                value={inactive}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">TOTAL TICKET SALES</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setTotalTickets(e.target.value)}
                value={totalTickets}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">AVG ACTIVE TS per TPM</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setAvg(e.target.value)}
                value={avg}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
          </div>
          <div className="top-tier-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  onChange={e => setName(e.target.value)}
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Retailer #</label>
                <br />
                <input
                  onChange={e => setRetailer(e.target.value)}
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Retailer Number"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Amount</label>
                <br />
                <input
                  onChange={e => setAmount(e.target.value)}
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">% Contribution</label>
                <br />
                <input
                  onChange={e => setContribution(e.target.value)}
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Contribution"
                />
              </div>
              <div className="buttons">
                <button
                  disabled={disabled}
                  type="submit"
                  className={disabled ? "disabled-button" : "submit-button"}
                >
                  Submit
                </button>
                <button type="reset" className="submit-button">
                  Reset
                </button>
              </div>
            </form>
            <div className="form-info">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Retailer #</th>
                    <th>Amount</th>
                    <th>% Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((ele, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          {ele.name}
                        </td>
                        <td>
                          {ele.retailer}
                        </td>
                        <td>
                          {ele.amount}
                        </td>
                        <td>
                          {ele.contribution}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="retailer-interaction">
            <p className="detail-header ">
              RETAILER INTERACTION - PROVIDE RETAILER TRANSACTION
            </p>
            <div className="ri-line">
              <p className="detail-header ">ACTIVITY</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
            </div>
            <div className="ri-line">
              <p className="detail-header">CALL</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setCall(e.target.value)}
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="ri-line">
              <p className="detail-header">VISITATION</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setVisitation(e.target.value)}
                className="auth-input auto"
                type="text"
              />
            </div>
          </div>
          <div className="details">
            <div className="details-line">
              <p className="detail-header ">#DETAILS</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
              <p className="detail-header center">% CHANGE</p>
            </div>
            <div className="details-line">
              <p className="detail-header">1 30 to 59 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay1(e.target.value)}
                value={day1}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">2 60 to 89 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay2(e.target.value)}
                value={day2}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">3 90 to 179 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay3(e.target.value)}
                value={day3}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">4 180 to 359 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay4(e.target.value)}
                value={day4}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">5 360 to 719 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay5(e.target.value)}
                value={day5}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">6 720 and above</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setDay6(e.target.value)}
                value={day6}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">Total</p>
              <input disabled className="auth-input auto" type="text" />
              <input
                onChange={e => setTotal(e.target.value)}
                value={total}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
          </div>
          <div className="button-wrapper">
            <button onClick={handleClick} className="button-entries-button">
              {
                
              }
            </button>
          </div>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Entries;
