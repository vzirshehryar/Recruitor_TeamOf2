import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext } from "react";
import axios from "axios";

export const CreateAcount = () => {
  const navigate = useNavigate();

  const { companyInfo, setcompanyInfo } = useContext(UserContext);

  async function NextPage(e) {
    e.preventDefault();
    console.log("Running");
    try {
      const response = await fetch("/company/setProfile", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyInfo),
      });
      console.log("response: ", response);
      navigate("/company/jobbasics");
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (e) => {
    setcompanyInfo({ ...companyInfo, [e.target.id]: e.target.value });
    console.log(companyInfo);
  };

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
        <form action="" onSubmit={NextPage}>
          <div>
            <label htmlFor="">Your company's name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="XYZ"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Your company's number of employees</label>
            <input
              type="text"
              name=""
              id="teamSize"
              placeholder="10-1000"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Your first and last name</label>
            <input
              type="text"
              name=""
              id="firstAndLastName"
              placeholder="Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">
              Your phone number <br />
              (For account management communication. Not visible to jobseekers.)
            </label>
            <input
              type="text"
              name=""
              id="phNo"
              placeholder="00000000000"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="create-account-submit-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
