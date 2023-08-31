import React, { useState, useContext } from "react";
import "./PayBenefits.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../companyContext";

export const PayBenefits = () => {
  const { payBenefits, setPayBenefits } = useContext(UserContext);

  const handleInputChange = (e) => {
    setPayBenefits({
      ...payBenefits,
      [e.target.id]: e.target.value,
      benefits: checkboxStates,
    });
    console.log(payBenefits);
  };

  const navigate = useNavigate();

  function NextPage(e) {
    e.preventDefault();
    console.log("Running");
    navigate("/company/setpreferences");
  }

  function PrevPage(e) {
    e.preventDefault();
    console.log("Running");
    navigate("/company/techdetail");
  }

  const [checkboxStates, setCheckboxStates] = useState(
    Array.from({ length: 9 }, () => false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  const handleSelectAll = () => {
    const allChecked = checkboxStates.every((isChecked) => isChecked);
    const newCheckboxStates = checkboxStates.map(() => !allChecked);
    setCheckboxStates(newCheckboxStates);
  };

  const handleSubmit = (e) => {
    //Function to store which checkboxes were ticked yes
    e.preventDefault();
    const selectedBenefits = checkboxStates
      .map((isChecked, index) => (isChecked ? `Checkbox ${index}` : null))
      .filter(Boolean);
    console.log("Selected Benefits:", selectedBenefits);

    NextPage(e);
  };

  return (
    <div>
      {/* <div className="horizontal-timeline">
        <ul className="horizontal-timeline-list">
          <li className="li1">1</li>
          <li className="li2">2</li>
          <li className="li3">3</li>
          <li className="li4">4</li>
          <li className="li5">5</li>
        </ul>
      </div> */}
      <div className="Header">Add Header here</div>
      <div className="Horizontal-Line-below-header-parent">
        <div className="round-horizontal-1">1</div>
        <div className="line-horizontal"></div>
        <div className="round-horizontal-1">2</div>
        <div className="line-horizontal"></div>
        <div className="round-horizontal-1">3</div>
        <div className="line-horizontal"></div>
        <div className="round-horizontal-2">4</div>
        <div className="line-horizontal-2"></div>
        <div className="round-horizontal-1">5</div>
      </div>
      <div className="PayBenefits-Title">Add Pay and Benefits</div>
      <div className="create-account-form-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="pay-benefits-input-container">
            <div className="input-container-top-div">
              <label htmlFor="">Salary Range</label>
            </div>
            <div className="input-container-bottom-div">
              <div className="long-div">
                <input
                  type="text"
                  name=""
                  id="salaryRange"
                  placeholder="Range"
                  onChange={handleInputChange}
                  className="payBenefits-salaryRange"
                />
              </div>
              <div className="small-div">
                <input
                  type="text"
                  name=""
                  id="mininmunSalary"
                  placeholder="Min"
                  onChange={handleInputChange}
                />
                <div className="payBenefits-to-text">to</div>
                <input
                  type="text"
                  name=""
                  id="maximunSalary"
                  placeholder="Max"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="input-container-bottom-div">
              <div className="long-div">
                <div className="payBenefits-Benefits-Text">Benefits</div>
                <div className="tags-holder">
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="select-all"
                      checked={checkboxStates.every((isChecked) => isChecked)}
                      onChange={handleSelectAll}
                    />
                    <label
                      htmlFor="select-all"
                      className="payBenefits-SelectAll"
                    >
                      Select All
                    </label>
                  </div>
                  {checkboxStates.map((isChecked, index) => (
                    <div
                      className={`custom-checkbox ${
                        isChecked ? "checked" : ""
                      }`}
                      key={index}
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      <label htmlFor={`checkbox-${index}`}>
                        + Yearly Bonus
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-div">
            <button className="form-back-button" onClick={PrevPage}>
              Back
            </button>
            <button type="submit" className="tech-detail-submit-button">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
