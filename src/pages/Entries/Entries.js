import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import "./styles.css";
const Entries = () => {
  const [name, setName] = useState("");
  const [retailer, setRetailer] = useState("");
  const [amount, setAmount] = useState("");
  const [contribution, setContribution] = useState("");
  const [people, setPeople] = useState([]);

  //   useEffect(()=>{

  //   },[])

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
  };
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Entries">
        <div className="accounts-wrapper">
          <div className="top-tier-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  onChange={e => setName(e.target.value)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Retailer #</label>
                <br />
                <input
                  onChange={e => setRetailer(e.target.value)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Retailer Number"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Amount</label>
                <br />
                <input
                  onChange={e => setAmount(e.target.value)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">% Contribution</label>
                <br />
                <input
                  onChange={e => setContribution(e.target.value)}
                  className="auth-input"
                  type="text"
                  placeholder="Enter Contribution"
                />
              </div>
              <div className="buttons">
                <button type="submit" className="submit-button">
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
