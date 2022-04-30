import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";
import "./styles.css";
const Entries = () => {
  const [name, setName] = useState("");
  const [retailer, setRetailer] = useState("");
  const [amount, setAmount] = useState("");
  const [contribution, setContribution] = useState("");
  const [people, setPeople] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const { accountName } = useSelector(state => state.user.name);
  console.log(accountName);
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
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Entries">
        <div className="accounts-wrapper">
          <div className="custodian-wrapper">
            <div className="custodian-grid">
              <div className="custom-input-wrapper">
                <label htmlFor="name">Region: </label>
                <br />
                <select name="region">
                  <option value="">Select Region/Zone</option>
                  <option value="ga">Greater Accra Region</option>
                  <option value="as">Ashanti Region</option>
                  <option value="we">Western Region</option>
                  <option value="es">Eastern Region</option>
                  <option value="cc">Central Region</option>
                  <option value="vt">Volta Region</option>
                  <option value="nt">Nothern Region</option>
                  <option value="uw">Upper West Region</option>
                  <option value="ue">Upper East Region</option>
                  <option value="ot">Oti Region</option>
                  <option value="bo">Bono Region</option>
                  <option value="ah">Ahafo Region</option>
                </select>
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Custodian</label>
                <br />
                <input
                  className="auth-input auto"
                  type="text"
                  placeholder="Enter Full Name"
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
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Entries;
