import React from "react";
import "../CreateAccount/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext } from "react";

export const JobBasics = () => {
    const { techDetails, setTechDetails } = useContext(UserContext);
    console.log(techDetails);

    const handleInputChange = (e) => {
        setTechDetails({ ...techDetails, [e.target.id]: e.target.value });
        console.log(techDetails);
    };

    const navigate = useNavigate();

    function NextPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/company/techdetail");
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
                <h1 className="create-account-heading">Add job Basics</h1>
            </div>
            <div className="create-account-form-container">
                <form action="" onSubmit={NextPage}>
                    <div>
                        <label htmlFor="">Company&apos;s Industry</label>
                        <input
                            type="text"
                            name=""
                            id="companyIndustry"
                            placeholder="industry"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Job Title</label>
                        <input
                            type="text"
                            name=""
                            id="jobTitle"
                            placeholder="Desginer"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Job Type</label>
                        <input
                            type="text"
                            name=""
                            id="jobType"
                            placeholder="Hybrd"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Location</label>
                        <input
                            type="text"
                            name=""
                            id="location"
                            placeholder="address"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Company Description</label>
                        <textarea
                            rows={7}
                            type="text"
                            name=""
                            id="companyDescription"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="create-account-submit-button"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};
