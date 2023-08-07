import React, { useState } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import { useEffect } from 'react';

const DisplaySkills = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  
  useEffect(() => {
    
    const apiUrl = 'http://localhost:4000/user/personalInfo/getSkills';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        
        console.log(response.data.skills);
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="data-container">
      {data && (
      <div className="data-box">
        <div className="dots-button" onClick={toggleDropdown}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-profile">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
        
        <div className="skills-box">
          {data.skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill}
              <button className="delete-button">
                x
              </button>
            </div>
          ))}
        </div>
          
        
      </div>
      )}
    </div>
  );
};

export default DisplaySkills;
