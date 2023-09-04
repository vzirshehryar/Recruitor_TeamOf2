import React, { useState, useEffect } from "react";
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
import Cross from "../../../../../assests/svg/cross-svg";
import Plus from "../../../../../assests/svg/plusIconsvg";
import Pen from "../../../../../assests/svg/pen-svg";
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

const PopUpEdit = ({ closePopUpKeyEdit, state, index }) => {
  console.log(index);
  let inputSave = "";
  const handleInputChangeKey = (event) => {
    console.log(event.target.value);
    inputSave = event.target.value;
  };

  const handleEdit = (e) => {
    console.log(inputSave);
    console.log(index);
    const updatedSkills = [...state];
    console.log("Updated Skills: ", updatedSkills);
    state[index] = inputSave;
    console.log("Message after change : ", updatedSkills);
    closePopUpKeyEdit();
  };
  return (
    <div className="Parent-Container-PopUpKey">
      <div className="PopUp-Container">
        <div className="cross-svg-container" onClick={closePopUpKeyEdit}>
          <Cross />
        </div>
        <div className="Edit-JobPost-Heading">Change Skill</div>

        <input
          className="input-field-pop-up-box"
          placeholder="Skill"
          id="AddSkillTitle"
          onChange={handleInputChangeKey}
        />
        <div className="popUpBox-Button-Container">
          <button className="Done-button" onClick={handleEdit}>
            Change
          </button>
          <button className="Close-button" onClick={closePopUpKeyEdit}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const PopUpKey = ({ closePopUpKey, addStringToArray, state, value }) => {
  let inputSave = "";
  const handleInputChangeKey = (event) => {
    console.log(event.target.value);
    inputSave = event.target.value;
  };

  const handleAdd = (e) => {
    console.log(inputSave);
    addStringToArray(inputSave);
    console.log(state);
    closePopUpKey();
  };

  return (
    <div className="Parent-Container-PopUpKey">
      <div className="PopUp-Container">
        <div className="cross-svg-container" onClick={closePopUpKey}>
          <Cross />
        </div>
        <div className="Edit-JobPost-Heading">Add New Skill</div>

        <input
          className="input-field-pop-up-box"
          placeholder="New Skill"
          id="AddSkillTitle"
          onChange={handleInputChangeKey}
        />
        <div className="popUpBox-Button-Container">
          <button className="Done-button" onClick={handleAdd}>
            Add
          </button>
          <button className="Close-button" onClick={closePopUpKey}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

function KeyQualities() {
  const { keyQualities, setKeyQualities } = useContext(UserContext);

  const [showPopUpKey, setShowPopUpKey] = useState(false);

  const [input, setInput] = useState([]);

  const [showPopUpEdit, setShowPopUpEdit] = useState(false);

  const navigate = useNavigate();

  function NextPage(e) {
    console.log(keyQualities);
    const updatedKeyQualities = {
      ...keyQualities,
      skills: input, // Assuming 'skills' is the property you want to update
    };
    setKeyQualities(updatedKeyQualities);
    console.log("updated: ", keyQualities);
    e.preventDefault();
    console.log("Running");

    navigate("/company/finishPostfinal");
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null && !token) {
      console.log("token not found");
      navigate("/company/createaccount");
    } else {
      console.log("Token found!");
    }
  }, []);

  function PreviousPage(e) {
    e.preventDefault();
    console.log("Running");
    navigate("/company/postJobReview");
  }

  const openPopUpKey = () => {
    setShowPopUpKey(true);
    console.log(showPopUpKey);
  };
  const closePopUpKey = () => {
    setShowPopUpKey(false);
  };
  const addStringToArray = (newString) => {
    setInput([...input, newString]);
  };
  const removeSkill = (index) => {
    const updatedSkills = [...input];
    updatedSkills.splice(index, 1);
    setInput(updatedSkills);
  };
  const [index, setIndex] = useState(null);

  const openPopUpKeyEdit = (index) => {
    console.log(index);
    setIndex(index); // Store the index in a state variable
    setShowPopUpEdit(true);
  };
  const closePopUpKeyEdit = () => {
    setShowPopUpEdit(false);
  };

  return (
    <div>
      {showPopUpKey && (
        <PopUpKey
          closePopUpKey={closePopUpKey}
          addStringToArray={addStringToArray}
          state={input}
        />
      )}
      {showPopUpEdit && (
        <PopUpEdit
          closePopUpKeyEdit={closePopUpKeyEdit}
          state={input}
          index={index} // Pass the selectedSkillIndex
        />
      )}
      <div className="Header">
        Upload Header here It is already created just needs to be implemented
        here
      </div>
      <div className="keyQualityParent-Container" id="skills">
        <div className="keyQuality-Title">Key Qualifications for your role</div>
        <div className="keyQuality-subtitle1">
          Find the best candidates by telling us which qualifications are a must
          have.
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

        {input.map((skill, index) => (
          <div key={index}>
            <div className="keyQuality-mini-container-2">
              <div className="keyQuality-Skill-1" id={`Skill${index}Title`}>
                Skill: {skill}
              </div>
              <div className="keyQuality-mini-sub-container-2">
                <div className="keyQuality-MustHave-1">
                  <Checkbox id={`Skill${index}MustHave`} />
                </div>
                <div className="keyQuality-NiceToHave-1">
                  <Checkbox id={`Skill${index}NiceToHave`} />
                </div>

                <div onClick={() => removeSkill(index)} className="custom-div">
                  <div className="keyQuality-TrashContainer">
                    <Trash />
                  </div>
                </div>
                <div
                  className="KeyQuality-Pen-Svg"
                  onClick={() => openPopUpKeyEdit(index)}
                >
                  <Pen />
                </div>
              </div>
            </div>
            <div className="Line-Container">
              <Line />
            </div>
          </div>
        ))}
        <div
          className="keyQuality-plus-button-container-parent "
          onClick={openPopUpKey}
        >
          <Plus />
        </div>
      </div>

      <div className="button-container-key">
        <button className="previous-button-key" onClick={PreviousPage}>
          Previous
        </button>
        <button className="next-button-key" onClick={NextPage}>
          Save and Continue
        </button>
      </div>
    </div>
  );
}

export default KeyQualities;
