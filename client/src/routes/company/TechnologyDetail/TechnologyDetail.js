import React from "react";
import "../CreateAccount/CreateAccount.css";
import "./TechnologyDetail.css"

export const TechnologyDetail = () => {
  return (
    <div className="create-account-main-container">
      {/* <div className="horizontal-timeline">
        <ul className="horizontal-timeline-list">
          <li className="li1">1</li>
          <li className="li2">2</li>
          <li className="li3">3</li>
          <li className="li4">4</li>
          <li className="li5">5</li>
        </ul>
      </div> */}
      <div className="create-account-heading-container">
        <h1 className="create-account-heading">Technology Detail</h1>
      </div>
      <div className="create-account-form-container">
        <form action="">
          <div>
            <label htmlFor="">Job schedule</label>
            <select name="" id="">
              <option value="">select an option</option>
            </select>
          </div>
          <div>
            <label htmlFor="">
              Number of people you wish to hire for this job
            </label>
            <select name="" id="">
              <option value="">select an option</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Recruitment timeline for this job</label>
            <select name="" id="">
              <option value="">1-2 weeks</option>
            </select>
          </div>
          <div className="form-button-div">
            <button className="form-back-button">Back</button>
            <button type="submit" className="tech-detail-submit-button">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};