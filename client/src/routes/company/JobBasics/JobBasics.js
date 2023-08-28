import React from 'react'
import "../CreateAccount/CreateAccount.css"

export const JobBasics = () => {
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
        <h1 className="create-account-heading">Add job Basics</h1>
      </div>
      <div className="create-account-form-container">
        <form action="">
          <div>
            <label htmlFor="">Company&apos;s Industry</label>
            <input type="text" name="" id="" placeholder="industry" />
          </div>
          <div>
            <label htmlFor="">Job Title</label>
            <input type="text" name="" id="" placeholder="Desginer" />
          </div>
          <div>
            <label htmlFor="">Job Type</label>
            <input type="text" name="" id="" placeholder="Hybrd" />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input type="text" name="" id="" placeholder="address" />
          </div>
          <div>
            <label htmlFor="">
              Company Description
            </label>
            <textarea rows={7} type="text" name="" id="" />
          </div>
          <button type="submit" className="create-account-submit-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
