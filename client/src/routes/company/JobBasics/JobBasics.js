import React, { useContext } from "react";
import { UserContext } from "../companyContext";
import { useNavigate } from "react-router-dom";

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
            <div className="create-account-heading-container">
                <h1 className="create-account-heading">Add job Basics</h1>
            </div>
            <div className="create-account-form-container">
                <form action="" onSubmit={NextPage}>
                    <div>
                        <label htmlFor="industry">Company's Industry</label>
                        <input
                            type="text"
                            name="industry"
                            id="industry"
                            placeholder="industry"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            name="jobTitle"
                            id="jobTitle"
                            placeholder="Designer"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobType">Job Type</label>
                        <input
                            type="text"
                            name="jobType"
                            id="jobType"
                            placeholder="Hybrid"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="address"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobDescription">
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
