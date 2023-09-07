// Import necessary dependencies and components
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import "./CreateAccount.css";
import Header from "../../Home/components/header";

// Define the CreateAccount component
export const CreateAcount = () => {
  // Initialize the navigation function from react-router-dom
  const navigate = useNavigate();

  // Access the user context using useContext
  const { companyInfo, setcompanyInfo } = useContext(UserContext);

  // Function to handle the form submission
  async function NextPage(e) {
    e.preventDefault();
    console.log("company: ", companyInfo);
    console.log("Running");
    try {
      // Send a POST request to set the company profile
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

      const data = await response.json();
      console.log("nav");

      // Navigate to the next page
      navigate("/company/jobbasics");
    } catch (e) {
      console.log(e);
    }
  }

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setcompanyInfo({ ...companyInfo, [e.target.id]: e.target.value });
    console.log(companyInfo);
  };

  // Check for user authentication and navigate accordingly
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
      {/* Render the Header component */}
      <Header active="company" />

      <div className="create-account-main-container">
        {/* Progress indicator */}
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

        {/* Heading */}
        <div className="create-account-heading-container">
          <h1 className="create-account-heading">Create an employer account</h1>
        </div>

        {/* Description */}
        <div className="create-account-para-container">
          <p className="create-account-para">
            You haven't posted a job before, so you'll need to create an
            employer account.
          </p>
        </div>

        {/* Create account form */}
        <div className="create-account-form-container">
          <form action="" onSubmit={NextPage}>
            <div>
              <label htmlFor="" className="Your-company-name-create">
                Your company's name
              </label>
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
              <label htmlFor="" className="Your-company-name-create">
                Your company's number of employees
              </label>
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
              <label htmlFor="" className="Your-company-name-create">
                Your first and last name
              </label>
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
              <label htmlFor="" className="Your-company-name-create">
                Your phone number <br />
                (For account management communication. Not visible to
                jobseekers.)
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
    </>
  );
};
