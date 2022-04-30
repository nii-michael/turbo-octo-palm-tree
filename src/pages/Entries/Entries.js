import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";
import "./styles.css";
import axios from "axios";
const Entries = () => {
  const [name, setName] = useState("");
  const [retailer, setRetailer] = useState("");
  const [amount, setAmount] = useState("");
  const [contribution, setContribution] = useState("");
  const [people, setPeople] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const fullName = useSelector(state => state.user.name);
  const region = useSelector(state => state.user.region);
  const token = useSelector(state => state.user.access_token);

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
    var data = JSON.stringify({
      week: "Week 17, 2022",
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
      retailers: [
        {
          name: "User 1",
          retailer: "RT 1",
          amount: 5.67,
          contribution: 25.6
        },
        {
          name: "User 2",
          retailer: "RT 2",
          amount: 9.9,
          contribution: 4.57
        }
      ]
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/users/login`,
      url: "localhost:5000/details/add/6269044a632bedb9291eeb2d",
      headers: {
        Authorization:
        `Bearer ${token}`
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
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
              <input type="week" />
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
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of Active TPMs</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of InActive TPMs</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">TOTAL TICKET SALES</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">AVG ACTIVE TS per TPM</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
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
              <input className="auth-input auto" type="text" />
            </div>
            <div className="ri-line">
              <p className="detail-header">VISITATION</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
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
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">2 60 to 89 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">3 90 to 179 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">4 180 to 359 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">5 360 to 719 Days</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">6 720 and above</p>
              <input disabled className="auth-input auto" type="text" />
              <input className="auth-input auto" type="text" />
              <input disabled className="auth-input auto" type="text" />
            </div>
          </div>
          <div className="button-wrapper">
            <button onClick={handleClick} className="button-entries-button">
              Submit Entries
            </button>
          </div>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Entries;
