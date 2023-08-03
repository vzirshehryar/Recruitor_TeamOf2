import React, { useState } from 'react';
import '../Skills/SkillsInput.css';

const SkillInput = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skill) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={newSkill}
          onChange={handleInputChange}
          placeholder="Enter a skill"
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>
      <div className="skills-container">
        <div className="skills-box">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill}
              <button className="delete-button" onClick={() => handleDeleteSkill(skill)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="submit-button-input" >
        Submit
      </button>
    </div>
  );
};

export default SkillInput;
