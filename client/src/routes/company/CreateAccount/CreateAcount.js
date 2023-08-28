import React from "react";
import "./CreateAccount.css";

export const CreateAcount = () => {
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
        <h1 className="create-account-heading">Create an employer account</h1>
      </div>
      <div className="create-account-para-container">
        <p className="create-account-para">
          You haven't posted a job before, so you'll need to create an employer
          account.
        </p>
      </div>
      <div className="create-account-form-container">
        <form action="">
          <div>
            <label htmlFor="">Your company's name</label>
            <input type="text" name="" id="" placeholder="XYZ" />
          </div>
          <div>
            <label htmlFor="">Your company's number of employees</label>
            <input type="text" name="" id="" placeholder="10-1000" />
          </div>
          <div>
            <label htmlFor="">Your first and last name</label>
            <input type="text" name="" id="" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="">
              Your phone number <br />
              (For account management communication. Not visible to jobseekers.)
            </label>
            <input type="text" name="" id="" placeholder="00000000000" />
          </div>
          <button type="submit" className="create-account-submit-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
