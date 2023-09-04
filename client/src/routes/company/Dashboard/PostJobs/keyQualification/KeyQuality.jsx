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
import Header from "../../../../Home/components/header";

function Checkbox({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    console.log(`Checkbox ${id} is checked: ${!isChecked}`);
  };

  return (
    <div className="checkbox-container" onClick={toggleCheckbox}>
      {isChecked ? <CheckedBox /> : <Unchecked />}
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
    <>
      <Header active="company" />
      <div>
        <div className="keyQualityParent-Container">
          <div className="keyQuality-Title">
            Key Qualifications for your role
          </div>
          <div className="keyQuality-subtitle1">
            Find the best candidates by telling us which qualifications are a
            must have.
          </div>
          <div className="keyQuality-subtitle2">
            Let us know how important they are so that we can reach the right
            jobseekers.
          </div>
          <div className="keyQuality-mini-container-1">
            <div className="keyQuality-Skill-Heading">Skill</div>
            <div className="keyQuality-mini-sub-container-1">
              <div className="keyQuality-MustHave-Heading">Must Have</div>
              <div className="keyQuality-NiceToHave-Heading">Nice To Have</div>
            </div>
          </div>
          <div className="Line-Container">
            <Line />
          </div>
          <div className="keyQuality-mini-container-2">
            <div className="keyQuality-Skill-1">Skill: Communication</div>
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
          {/* Add more key quality mini containers as needed */}
          <div className="keyQuality-mini-container-2">
            <div className="keyQuality-Skill-1">Skill: [SkillName]</div>
            <div className="keyQuality-mini-sub-container-2">
              <div className="keyQuality-MustHave-1">
                <Checkbox id="[SkillName]MustHave" />
              </div>
              <div className="keyQuality-NiceToHave-1">
                <Checkbox id="[SkillName]NiceToHave" />
              </div>
              <div className="keyQuality-TrashContainer">
                <Trash id="Trash[SkillName]" />
              </div>
            </div>
          </div>
          <div className="Line-Container">
            <Line />
          </div>
        </div>
        <div className="keyQuality-mini-container-2">
          <div className="keyQuality-Skill-1">Skill: [SkillName]</div>
          <div className="keyQuality-mini-sub-container-2">
            <div className="keyQuality-MustHave-1">
              <Checkbox id="[SkillName]MustHave" />
            </div>
            <div className="keyQuality-NiceToHave-1">
              <Checkbox id="[SkillName]NiceToHave" />
            </div>
            <div className="keyQuality-TrashContainer">
              <Trash id="Trash[SkillName]" />
            </div>
          </div>
        </div>
        {/* Add more key quality mini containers as needed */}
        <div className="Line-Container">
          <Line />
        </div>
        <div className="keyQuality-mini-container-2">
          <div className="keyQuality-Skill-1">Skill: [SkillName]</div>
          <div className="keyQuality-mini-sub-container-2">
            <div className="keyQuality-MustHave-1">
              <Checkbox id="[SkillName]MustHave" />
            </div>
            <div className="keyQuality-NiceToHave-1">
              <Checkbox id="[SkillName]NiceToHave" />
            </div>
            <div className="keyQuality-TrashContainer">
              <Trash id="Trash[SkillName]" />
            </div>
          </div>
        </div>
        <div className="Line-Container">
          <Line />
        </div>
        <div className="button-container">
          <button className="previous-button" onClick={PreviousPage}>
            Previous
          </button>
          <button className="next-button" onClick={NextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default KeyQualities;
