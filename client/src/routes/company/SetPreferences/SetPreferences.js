import React from "react";
import "./SetPreferences.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext } from "react";

export const SetPreferences = () => {
  const { preferences, setPreferences } = useContext(UserContext);
  console.log(preferences);

  const handleInputChange = (e) => {
    setPreferences({ ...preferences, [e.target.id]: e.target.value });
    console.log(preferences);
  };
  const [emails, setEmails] = useState([]);
  const handleAddEmail = () => {
    if (preferences.email) {
      setEmails((prevEmails) => [...prevEmails, preferences.email]);
      setPreferences({ ...preferences, email: emails });
    }
  };
  const navigate = useNavigate();

  function NextPage(e) {
    e.preventDefault();
    console.log("Running");
    navigate("/company/postJobReview");
  }
  function PrevPage(e) {
    e.preventDefault();
    console.log("Running");
    navigate("/company/paybenefits");
  }

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
            <input
              type="text"
              name=""
              id="email"
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div>
            <button
              type="button"
              className="Perfrences-AddEmail-Button"
              onClick={handleAddEmail}
            >
              + Add Email
            </button>
            {emails.length > 0 && (
              <ul>
                {emails.map((email, index) => (
                  <li key={index}>{email}</li>
                ))}
              </ul>
            )}
            <div className="flex">
              <input type="checkbox" name="" id="sendIndividualEmails" />{" "}
              <label htmlFor="">
                Plus, send an individual email update each time someone applies.{" "}
              </label>
            </div>
            <p className="heading-left-align para-pref">
              Let potential candidates contact you about this job
            </p>
            <div className="flex">
              <input type="checkbox" name="" id="ByEmailToTheAddress" />{" "}
              <label htmlFor="">By email to the address provided</label>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="ByPhone" />{" "}
              <label htmlFor="">By Phone</label>
            </div>
          </div>
          <div>
            <h5 className="form-section-heading">Application Preferences</h5>
            <label htmlFor="">Ask potential candidates for a CV?</label>
            <select name="" id="askCandidates">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Application deadline</label>
            <input
              type="date"
              name=""
              id="applicationDeadline"
              placeholder="dd-mm-yyyy"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-button-div">
            <button className="form-back-button" onClick={PrevPage}>
              Back
            </button>
            <button
              type="submit"
              className="tech-detail-submit-button"
              onClick={NextPage}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
