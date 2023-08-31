import React, { useState } from "react";
import "./keyQualities.css";
import Line from "../PostJobReview/line";
import Trash from "../../../../../assests/svg/trashSvg";
import Unchecked from "../../../../../assests/svg/uncheckedBoxsvg";
import CheckedBox from "../../../../../assests/svg/checkedBoxsvg";
import MiniCheckedBox from "../../../../../assests/svg/miniChecksvg";
import MiniUnchecked from "../../../../../assests/svg/miniUnchecksvg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../companyContext";
import { useContext } from "react";

function Checkbox() {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return (
        <div className="checkbox-container" onClick={toggleCheckbox}>
            {checked ? <CheckedBox /> : <Unchecked />}
        </div>
    );
}

function KeyQualities() {
    const { keyQualities, setKeyQualities } = useContext(UserContext);
    console.log(keyQualities);

    const handleInputChange = (e) => {
        setKeyQualities({ ...keyQualities, [e.target.id]: e.target.value });
        console.log(keyQualities);
    };

    const navigate = useNavigate();

    function NextPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/company/finishPostfinal");
    }

    function PreviousPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/company/postJobReview");
    }

    return (
        <div>
            <div className="Header">
                Upload Header here It is already created just needs to be
                implemented here
            </div>
            <div className="keyQualityParent-Container">
                <div className="keyQuality-Title">
                    Key Qualifications for your role
                </div>
                <div className="keyQuality-subtitle1">
                    Find the best candidates by telling us which qualifications
                    are a must have.
                </div>
                <div className="keyQuality-subtitle2">
                    Let us know how important they are so that we can reach the
                    right jobseekers.
                </div>
                <div className="keyQuality-mini-container-1">
                    <div className="keyQuality-Skill-Heading">Skill</div>
                    <div className="keyQuality-mini-sub-container-1">
                        <div className="keyQuality-MustHave-Heading">
                            Must Have
                        </div>
                        <div className="keyQuality-NiceToHave-Heading">
                            Nice To Have
                        </div>
                    </div>
                </div>
                <div className="Line-Container">
                    <Line />
                </div>
                <div className="keyQuality-mini-container-2">
                    <div className="keyQuality-Skill-1">
                        Skill: Communication
                    </div>
                    <div className="keyQuality-mini-sub-container-2">
                        <div className="keyQuality-MustHave-1">
                            <Checkbox id="Skill1MustHave" />
                        </div>
                        <div className="keyQuality-NiceToHave-1">
                            <Checkbox id="Skill1NiceToHave" />
                        </div>
                        <div className="keyQuality-TrashContainer">
                            <Trash id="TrashSkill1" />
                        </div>
                    </div>
                </div>
                <div className="Line-Container">
                    <Line />
                </div>
                <div className="keyQuality-mini-container-2">
                    <div className="keyQuality-Skill-1">Skill: Marketing</div>
                    <div className="keyQuality-mini-sub-container-2">
                        <div className="keyQuality-MustHave-1">
                            <Checkbox id="Skill2MustHave" />
                        </div>
                        <div className="keyQuality-NiceToHave-1">
                            <Checkbox id="Skill2NiceToHave" />
                        </div>
                        <div className="keyQuality-TrashContainer">
                            <Trash id="TrashSkill2" />
                        </div>
                    </div>
                </div>
                <div className="Line-Container">
                    <Line />
                </div>
                <div className="keyQuality-mini-container-2">
                    <div className="keyQuality-Skill-1">Skill: Advertising</div>
                    <div className="keyQuality-mini-sub-container-2">
                        <div className="keyQuality-MustHave-1">
                            <Checkbox id="Skill3MustHave" />
                        </div>
                        <div className="keyQuality-NiceToHave-1">
                            <Checkbox id="Skill3NiceToHave" />
                        </div>
                        <div className="keyQuality-TrashContainer">
                            <Trash id="TrashSkill3" />
                        </div>
                    </div>
                </div>
                <div className="Line-Container">
                    <Line />
                </div>
                <div className="keyQuality-mini-container-2">
                    <div className="keyQuality-Skill-1">Skill: Social</div>
                    <div className="keyQuality-mini-sub-container-2">
                        <div className="keyQuality-MustHave-1">
                            <Checkbox id="Skill4MustHave" />
                        </div>
                        <div className="keyQuality-NiceToHave-1">
                            <Checkbox id="Skill4NiceToHave" />
                        </div>
                        <div className="keyQuality-TrashContainer">
                            <Trash id="TrashSkill4" />
                        </div>
                    </div>
                </div>
                <div className="Line-Container">
                    <Line />
                </div>
                <div className="keyQuality-Additional">
                    What additional criteria are important to the role?
                </div>
                <div className="keyQuality-max-criteria">
                    10 criteria max. Search for skills like communication, Excel
                    or customer service.
                </div>
                <input
                    className="keyQuality-input"
                    id="criteriaInput"
                    onChange={handleInputChange}
                />
                <div className="footer-keyQuality"></div>
                <div className="keyQuality-Button-Container">
                    <button
                        className="keyQuality-Back-Button"
                        onClick={PreviousPage}
                    >
                        Back
                    </button>
                    <button
                        className="keyQuality-Continue-Button"
                        onClick={NextPage}
                    >
                        Save and Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default KeyQualities;
