import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";
import { PulseSpinner } from "react-spinners-kit";
import axios from "axios";

import "./styles.css";
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
  const [topTierVal, setTopTierVal] = useState({});
  const [loading, setLoading] = useState(false);
  const [prevWeek, setPrevWeek] = useState([]);
  const [newData, setNewData] = useState(false);

  const fullName = useSelector((state) => state.user.name);
  const username = useSelector((state) => state.user.username);
  const region = useSelector((state) => state.user.region);
  const token = useSelector((state) => state.user.access_token);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
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
  }, [name, retailer, contribution, amount, people]);

  const handleSubmit = (e) => {
    console.log("start");
    e.preventDefault();
    if (retailer.length != 10) {
      setTopTierVal({
        ...topTierVal,
        retVal: "Please enter a valid Retailer No",
      });
    } else {
      if (contribution < 0 || contribution > 100) {
        setTopTierVal({
          retVal: "",
          conVal: "Please enter a number of range 0-100",
        });
      } else {
        setTopTierVal({
          retVal: "",
          conVal: "",
        });

        setPeople([
          ...people,
          {
            name,
            retailer,
            amount,
            contribution,
          },
        ]);
        e.target.reset();
        setName("");
        setRetailer("");
        setAmount("");
        setContribution("");

        setDisabled(true);
      }
    }
  };
  const validateForm = () => {
    if (week.length == 0) {
      return false;
    }
    if (deployed.length == 0) {
      return false;
    }
    if (active.length == 0) {
      return false;
    }
    if (avg.length == 0) {
      return false;
    }
    if (call.length == 0) {
      return false;
    }
    if (visitation.length == 0) {
      return false;
    }
    if (day1.length == 0) {
      return false;
    }
    if (day2.length == 0) {
      return false;
    }
    if (day3.length == 0) {
      return false;
    }
    if (day4.length == 0) {
      return false;
    }
    if (day5.length == 0) {
      return false;
    }
    if (day6.length == 0) {
      return false;
    }
    if (total.length == 0) {
      return false;
    }
    if (people.length == 0) {
      alert("Atleast one toptier person required");
      return false;
    }
    return true;
  };
  const handleClick = () => {
    if (validateForm()) {
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
        retailers: people,
      });

      var config = {
        method: "post",
        url: `${process.env.REACT_APP_BE}/details/add/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          setWeek("");
          setDeployed("");
          setActive("");
          setInactive("");
          setTotalTickets("");
          setAvg("");
          setDay1("");
          setDay2("");
          setDay3("");
          setDay4("");
          setDay5("");
          setDay6("");
          setTotal("");
          setCall("");
          setVisitation("");
          setPeople([]);
          setLoading(false);
          setNewData(true);
        })
        .catch(function (error) {
          console.log(error);
          alert(error.message);
        });
    } else {
      alert("Please fill in all entries");
    }
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/details/${username}/user/prev`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setPrevWeek(response.data);
        setNewData(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [newData]);

  const  validateNumber= (e)=> {
    console.log(e)
    const pattern = /^[0-9]$/;
    return pattern.test(e.key )
}
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
                onChange={(e) => setWeek(e.target.value)}
                value={week}
                type="week"
                required
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
              <input
                defaultValue={prevWeek?.deployed}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDeployed(e.target.value)}
                value={deployed}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of Active TPMs</p>
              <input
                defaultValue={prevWeek?.active}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setActive(e.target.value)}
                value={active}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header"># of InActive TPMs</p>
              <input
                defaultValue={prevWeek?.inactive}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setInactive(e.target.value)}
                value={inactive}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">TOTAL TICKET SALES</p>
              <input
                defaultValue={prevWeek?.totalTickets}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setTotalTickets(e.target.value)}
                value={totalTickets}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">AVG ACTIVE TS per TPM</p>
              <input
                defaultValue={prevWeek?.avg?.$numberDecimal}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setAvg(e.target.value)}
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
                  onChange={(e) => setName(e.target.value)}
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Retailer #</label>
                <br />
                <input
                  onChange={(e) => setRetailer(e.target.value)}
                  maxLength="8"
                  className="auth-input auto"
                  type="tel"
                  onKeyPress={(e)=>validateNumber(e)}
                  placeholder="Enter Retailer Number"
                />
                <span className="validation">{topTierVal.retVal}</span>
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Amount</label>
                <br />
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  className="auth-input auto"
                  type="number"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">% Contribution</label>
                <br />
                <input
                  onChange={(e) => setContribution(e.target.value)}
                  className="auth-input auto"
                  type="number"
                  size="3"
                  placeholder="Enter Contribution"
                />
                <span className="validation">{topTierVal.conVal}</span>
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
                        <td>{ele.name}</td>
                        <td>{ele.retailer}</td>
                        <td>{ele.amount}</td>
                        <td>{ele.contribution}</td>
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
              <input
                defaultValue={prevWeek?.call}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                value={call}
                onChange={(e) => setCall(e.target.value)}
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="ri-line">
              <p className="detail-header">VISITATION</p>
              <input
                defaultValue={prevWeek?.visitation}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                value={visitation}
                onChange={(e) => setVisitation(e.target.value)}
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
              <input
                defaultValue={prevWeek?.day1}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay1(e.target.value)}
                value={day1}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">2 60 to 89 Days</p>
              <input
                defaultValue={prevWeek?.day2}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay2(e.target.value)}
                value={day2}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">3 90 to 179 Days</p>
              <input
                defaultValue={prevWeek?.day3}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay3(e.target.value)}
                value={day3}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">4 180 to 359 Days</p>
              <input
                defaultValue={prevWeek?.day4}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay4(e.target.value)}
                value={day4}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">5 360 to 719 Days</p>
              <input
                defaultValue={prevWeek?.day5}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay5(e.target.value)}
                value={day5}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">6 720 and above</p>
              <input
                defaultValue={prevWeek?.day6}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setDay6(e.target.value)}
                value={day6}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
            <div className="details-line">
              <p className="detail-header">Total</p>
              <input
                defaultValue={prevWeek?.total}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                onChange={(e) => setTotal(e.target.value)}
                value={total}
                className="auth-input auto"
                type="text"
              />
              <input disabled className="auth-input auto" type="text" />
            </div>
          </div>
          <div className="button-wrapper">
            <button
              disabled={loading}
              onClick={handleClick}
              className="button-entries-button"
            >
              {loading ? (
                <PulseSpinner size={30} color="#fff" loading={loading} />
              ) : (
                "Submit Entries"
              )}
            </button>
          </div>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Entries;
