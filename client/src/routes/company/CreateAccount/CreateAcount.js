import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext, useEffect } from "react";

import axios from "axios";
import "./CreateAccount.css";
import Header from "../../Home/components/header";

export const CreateAcount = () => {
  const navigate = useNavigate();

  const { companyInfo, setcompanyInfo } = useContext(UserContext);

  async function NextPage(e) {
    e.preventDefault();
    console.log("company: ", companyInfo);
    console.log("Running");
    try {
      var response = await fetch("/company/setProfile", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyInfo),
      });

      console.log("response: ", response);
      response = await response.json();

    
      console.log("nav");

      navigate("/company/jobbasics");
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (e) => {
    setcompanyInfo({ ...companyInfo, [e.target.id]: e.target.value });
    console.log(companyInfo);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (localStorage.getItem("userType") !== "company")
      navigate("/loginAsCompany");
    if (token === null && !token) {
      console.log("token not found");
      navigate("/company/createaccount");
    } else {
      console.log("Token found!");
    }
  }, []);

  return (
    <>
      <Header active="company" />
      <div className="create-account-main-container">
        <div className="Horizontal-Line-below-header-parent-create">
          <div className="round-horizontal-2-create">1</div>
          <div className="line-horizontal-2-create"></div>
          <div className="round-horizontal-1-create">2</div>
          <div className="line-horizontal-create"></div>
          <div className="round-horizontal-1-create">3</div>
          <div className="line-horizontal-create"></div>
          <div className="round-horizontal-1-create">4</div>
          <div className="line-horizontal-create"></div>
          <div className="round-horizontal-1-create">5</div>
        </div>

        <div className="create-account-heading-container">
          <h1 className="create-account-heading">Create an employer account</h1>
        </div>
        <div className="create-account-para-container">
          <p className="create-account-para">
            You haven't posted a job before, so you'll need to create an
            employer account.
          </p>
        </div>
        <div className="create-account-form-container">
          <form action="" onSubmit={NextPage}>
            <div>
              <label htmlFor="" className="Your-company-name-create p-4">
                Your company's name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="p-3"
                placeholder="Your company"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="" className="Your-company-name-create">
                Your company's number of employees
              </label>
              <input
                type="text"
                name=""
                id="teamSize"
                placeholder="10-1000"
                className="p-3"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="" className="Your-company-name-create">
                Your first and last name
              </label>
              <input
                type="text"
                name=""
                id="firstAndLastName"
                className="p-3"
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="" className="Your-company-name-create">
                Your phone number <br />
                {/* added the text in a span tag */}
                <span>
                (For account management communication. Not visible to
                jobseekers.)
                </span>

              </label>
              <input
                type="text"
                name=""
                id="phNo"
                placeholder="Your phone"
                className="p-3"
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
    </>
  );
};
