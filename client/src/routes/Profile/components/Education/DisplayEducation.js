import React, { useState } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import { useEffect } from 'react';

const DisplayEdu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    
    const apiUrl = '/user/education/getData';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.educations[0]);
        
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
        
          <div className="data-heading">{data.degree}</div>
          <div className="data-dates">
            {data.startMonth} {data.startYear} - {data.endMonth} {data.endYear}
          </div>
          <div className="data-company">{data.fieldOfStudy}</div>
          {/* <div className="data-description-heading">Description:</div> */}
          <div className="data-description">{data.school}</div>
        
      </div>
      )}
    </div>
  );
};

export default DisplayEdu;
