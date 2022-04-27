import React from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import "./styles.css";
const Entries = () => {
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Entries">
        <div className="accounts-wrapper">
          <div className="top-tier-wrapper">
            <form>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  //   onChange={e => handleChange(e)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Retailer #</label>
                <br />
                <input
                  //   onChange={e => handleChange(e)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Retailer Number"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Amount</label>
                <br />
                <input
                  //   onChange={e => handleChange(e)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">% Contribution</label>
                <br />
                <input
                  //   onChange={e => handleChange(e)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Contribution"
                />
              </div>
              <div className="buttons">
                <button className="submit-button">Submit</button>
                <button className="submit-button">Reset</button>
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
                  <tr>
                    <td>Name</td>
                    <td>Name</td>
                    <td>Name</td>
                    <td>Name</td>
                  </tr>
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
