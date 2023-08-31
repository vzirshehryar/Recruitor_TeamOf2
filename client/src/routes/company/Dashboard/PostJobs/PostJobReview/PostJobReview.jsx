import React, { useState } from "react";
import "./ReviewJob.css";
import Header from "../../../../Home/components/header";
import Line from "./line";
import Pen from "../../../../../assests/svg/pen-svg";
import Cross from "../../../../../assests/svg/cross-svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../companyContext";
import { useContext } from "react";

const PopUp = ({ closePopUp }) => {
    return (
        <div className="Parent-Container-PopUp">
            <div className="PopUp-Container">
                <div className="cross-svg-container" onClick={closePopUp}>
                    <Cross />
                </div>
                <div className="Edit-JobPost-Heading">Edit Job Post</div>
                <div className="Job-Title-Heading">Job Title</div>
                <input
                    className="input-field-pop-up-box"
                    placeholder="Designer"
                    id="changeJobTitle"
                />
                <div className="popUpBox-Button-Container">
                    <button className="Done-button" onClick={closePopUp}>
                        Done
                    </button>
                    <button className="Close-button" onClick={closePopUp}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

function ReviewJob() {
    const { postJobReview, setPostJobReview } = useContext(UserContext);
    console.log(postJobReview);

    const handleInputChange = (e) => {
        setPostJobReview({ ...postJobReview, [e.target.id]: e.target.value });
        console.log(postJobReview);
    };

    const navigate = useNavigate();

    function NextPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/company/keyQualities");
    }

    function PreviousPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/company/setpreferences");
    }

    const [showPopUp, setShowPopUp] = useState(false);

    const openPopUp = () => {
        setShowPopUp(true);
    };
    const closePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <div>
            {showPopUp && <PopUp closePopUp={closePopUp} />}
            <div className="Header">
                Upload Header here It is already created just needs to be
                implemented here
            </div>
            <div className="Step22-Parent-Container">
                <div className="Review-Heading">Review</div>
                <div className="Details-Heading">Details</div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Job Title</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>

                {/* Copying and pasting the upper code */}
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Company For This Job</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Number Of Openings</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Location</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">
                        Part-time hours per week
                    </div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Pay</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Schedule</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Benefits</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Job Description </div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Job Title</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
            </div>

            {/*Using the same code for next container Settings */}

            <div className="Step22-Parent-Container-2">
                <div className="Settings-Heading">Settings</div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Require CV</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                {/* Copying and pasting the upper code */}
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Application updates</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Application deadline</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">
                        Candidates contact you (Phone)
                    </div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Reference ID</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Application method</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
            </div>

            {/*Again Copying for container 3 Account */}

            <div className="Step22-Parent-Container-3">
                <div className="Settings-Heading">Account</div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Contact</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                {/* Copying and pasting the upper code */}
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Name</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Phone Number</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
                <div className="Option-Heading-Container">
                    <div className="Option-Heading">Company name</div>
                    <div className="Option-Heading-2">Microsoft Office</div>
                    <div onClick={openPopUp} className="Pen-Container">
                        <Pen className="Pen-Icon" />
                    </div>
                </div>
                <Line />
            </div>
            <div className="Button-Container">
                <button className="Back-Button" onClick={PreviousPage}>
                    Back
                </button>
                <button className="Confirm-Button" onClick={NextPage}>
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default ReviewJob;
