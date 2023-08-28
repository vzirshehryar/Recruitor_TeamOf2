import React from 'react'
import "./SetPreferences.css"

export const SetPreferences = () => {
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
        <h1 className="create-account-heading">Set Preferences</h1>
      </div>
      <div className="create-account-form-container">
        <form action="">
          <div>
            <label htmlFor="">Send daily updates to</label>
            <input type="text" name="" id="" placeholder="Email" />
          </div>
          <div>
            <h5 className='heading-left-align form-section-heading'>+ Add Email</h5>
            <div className='flex'>
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">
                Plus, send an individual email update each time someone applies.{" "}
              </label>
            </div>
            <p className='heading-left-align para-pref'>Let potential candidates contact you about this job</p>
            <div className='flex'>
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">By email to the address provided</label>
            </div>
            <div className='flex'>
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">By Phone</label>
            </div>
          </div>
          <div>
            <h5 className="form-section-heading">Application Preferences</h5>
            <label htmlFor="">Ask potential candidates for a CV?</label>
            <select name="" id="">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Application deadline</label>
            <input type="date" name="" id="" placeholder="dd-mm-yyyy" />
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
}
