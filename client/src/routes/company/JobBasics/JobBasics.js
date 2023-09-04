import React, { useContext, useEffect } from "react";
import { UserContext } from "../companyContext";
import { useNavigate } from "react-router-dom";
import "./JobBasicst.css";
import Header from "../../Home/components/header";

export const JobBasics = () => {
  const { jobBasics, setjobBasics } = useContext(UserContext);

  const handleInputChange = (e) => {
    setjobBasics({ ...jobBasics, [e.target.id]: e.target.value });
    console.log(jobBasics);
  };

  const navigate = useNavigate();

  const NextPage = (e) => {
    e.preventDefault();
    console.log("Running");
    navigate("/company/techdetail");
  };

  useEffect(() => {
    const gettoken = localStorage.getItem("token");
    console.log(gettoken);
  }, []);

  return (
    <>
      <Header active="company" />
      <div className="create-account-main-container">
        <div className="Horizontal-Line-below-header-parent-jobBasics">
          <div className="round-horizontal-1-jobBasics">1</div>
          <div className="line-horizontal-jobBasics"></div>
          <div className="round-horizontal-2-jobBasics">2</div>
          <div className="line-horizontal-2-jobBasics"></div>
          <div className="round-horizontal-1-jobBasics">3</div>
          <div className="line-horizontal-jobBasics"></div>
          <div className="round-horizontal-1-jobBasics">4</div>
          <div className="line-horizontal-jobBasics"></div>
          <div className="round-horizontal-1-jobBasics">5</div>
        </div>
        <div className="create-account-heading-container">
          <h1 className="create-account-heading">Add job Basics</h1>
        </div>
        <div className="create-account-form-container">
          <form action="" onSubmit={NextPage}>
            <div>
              <label htmlFor="industry" className="companyIndustry-jobBasics">
                Company's Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                placeholder="industry"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="jobTitle" className="companyIndustry-jobBasics">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Designer"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="jobType" className="companyIndustry-jobBasics">
                Job Type
              </label>
              <input
                type="text"
                name="jobType"
                id="jobType"
                placeholder="Hybrid"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="companyIndustry-jobBasics">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="address"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="jobDescription"
                className="companyIndustry-jobBasics"
              >
                Company Description
              </label>
              <textarea
                rows={7}
                type="text"
                name="jobDescription"
                id="jobDescription"
                onChange={handleInputChange}
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
