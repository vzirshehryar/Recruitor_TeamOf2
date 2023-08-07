import React, { useState } from 'react';
import '../Skills/SkillsInput.css';
import axios from 'axios'; // Don't forget to import axios if you haven't already.
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const SkillInput = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    skills: [],
    newSkill: '',
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      newSkill: event.target.value,
    });
  };

  const handleAddSkill = () => {
    if (formState.newSkill.trim() !== '') {
      setFormState((prevFormState) => ({
        ...prevFormState,
        skills: [...prevFormState.skills, prevFormState.newSkill.trim()],
        newSkill: '',
      }));
    }
  };

  const handleDeleteSkill = (skill) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      skills: prevFormState.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = () => {
    
    
    const apiUrl = 'http://localhost:4000/user/personalInfo/postSkills';

    const token = localStorage.getItem('token');
    console.log(token);

    const headers = {
      Authorization: token,
    };

    const requestData = {
      skills: formState.skills,
    };

    console.log(requestData);
    
    axios.post(apiUrl, requestData, { headers })
      .then((response) => {
        console.log(response.data);
        const updateprogress = localStorage.getItem('progress');
        const newprogress = parseInt(updateprogress, 10);
        const addprogress = newprogress + 15;
        const finalprogress = addprogress.toString();
        localStorage.setItem('progress', finalprogress);
        toast.success(response.data.message);
          setTimeout(() => {
            navigate("/skills/submit-skills");
          }, 1500);
        
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error sending data to the backend.");
      });
  };

  return (
    <div className="container-skills">
      <div className="input-container">
        <input
          type="text"
          value={formState.newSkill}
          onChange={handleInputChange}
          placeholder="Enter a skill"
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>
      <div className="skills-container">
        <div className="skills-box">
          {formState.skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill}
              <button className="delete-button" onClick={() => handleDeleteSkill(skill)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="submit-button-input" onClick={handleSubmit}>
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default SkillInput;
