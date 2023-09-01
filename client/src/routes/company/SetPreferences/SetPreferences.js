import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../companyContext";
import "./SetPreferences.css";

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
            setPreferences({ ...preferences, email: preferences.email });
        }
    };
    const navigate = useNavigate();

    const NextPage = (e) => {
        e.preventDefault();
        console.log("Running");
        navigate("/company/postJobReview");
    };

    const PrevPage = (e) => {
        e.preventDefault();
        console.log("Running");
        navigate("/company/paybenefits");
    };

    return (
        <div className="create-account-main-container">
            <div className="Header-tech">Header</div>
            <div className="Horizontal-Line-below-header-parent-tech">
                <div className="round-horizontal-1-tech">1</div>
                <div className="line-horizontal-tech"></div>
                <div className="round-horizontal-1-tech">2</div>
                <div className="line-horizontal-tech"></div>
                <div className="round-horizontal-1-tech">3</div>
                <div className="line-horizontal-tech"></div>
                <div className="round-horizontal-1-tech">4</div>
                <div className="line-horizontal-2-tech"></div>
                <div className="round-horizontal-2-tech">5</div>
            </div>
            <div className="create-account-heading-container">
                <h1 className="create-account-heading">Set Preferences</h1>
            </div>
            <div className="create-account-form-container">
                <form action="">
                    <div>
                        <label htmlFor="email" className="sendUpdates-pref">
                            Send daily updates to
                        </label>
                        <input
                            type="text"
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
                            <input
                                type="checkbox"
                                id="sendIndividualEmails"
                                className="input-pref"
                            />
                            <label htmlFor="sendIndividualEmails">
                                Plus, send an individual email update each time
                                someone applies.
                            </label>
                        </div>
                        <p className="heading-left-align para-pref">
                            Let potential candidates contact you about this job
                        </p>
                        <div className="flex">
                            <input
                                type="checkbox"
                                id="ByEmailToTheAddress"
                                className="input-pref"
                            />
                            <label htmlFor="ByEmailToTheAddress">
                                By email to the address provided
                            </label>
                        </div>
                        <div className="flex">
                            <input
                                type="checkbox"
                                id="ByPhone"
                                className="input-pref"
                            />
                            <label htmlFor="ByPhone">By Phone</label>
                        </div>
                    </div>
                    <div>
                        <h5 className="form-section-heading">
                            Application Preferences
                        </h5>
                        <label htmlFor="cv">
                            Ask potential candidates for a CV?
                        </label>
                        <select id="cv" onChange={handleInputChange}>
                            <option value="">select an option</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="applicationDeadline">
                            Application deadline
                        </label>
                        <input
                            type="date"
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
