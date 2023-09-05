import React, { useContext, useEffect } from "react";
import { UserContext } from "../companyContext";
import { useNavigate } from "react-router-dom";
import "./JobBasicst.css";

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

    return (
        <div className="create-account-main-container">
            <div className="Header-jobBasics">Header</div>
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
                        <label
                            htmlFor="selectIndustry"
                            className="companyIndustry-jobBasics"
                        >
                            Company's Industry
                        </label>
                        <select
                            id="selectIndustry"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Industry</option>
                            <option value="DigitalMedia">Digital Media</option>
                            <option value="Software">Software</option>
                            <option value="SocialMedia">Social Media</option>
                            <option value="Robotics">Robotics</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="jobTitle"
                            className="companyIndustry-jobBasics"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            id="jobTitle"
                            placeholder="Designer"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="selectType"
                            className="companyIndustry-jobBasics"
                        >
                            Job Type
                        </label>
                        <select
                            id="selectType"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Job Type</option>
                            <option value="OnSite">Onsite</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="companyIndustry-jobBasics"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="address"
                            onChange={handleInputChange}
                            required
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
                            required
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
