import React from "react";
import "../CreateAccount/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../companyContext";
import { useContext } from "react";

export const JobBasics = () => {
    const { jobBasics, setjobBasics } = useContext(UserContext);
    console.log(jobBasics);

    const handleInputChange = (e) => {
        setjobBasics({ ...jobBasics, [e.target.id]: e.target.value });
        console.log(jobBasics);
    };

    const navigate = useNavigate();

    async function NextPage(e) {
        e.preventDefault();
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
                            id="industry"
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
                            id="jobDescription"
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
