import React, { useState } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayCour = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    
    const apiUrl = '/user/certificate/getData';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        
        setData(response.data.certificate[0]);
        
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
        
          <div className="data-heading">{data.courseTitle}</div>
          <div className="data-dates">
            {data.issueDate} - {data.expiryDate} 
          </div>
          <div className="data-company">{data.organization}</div>
          {/* <div className="data-description-heading">Course Credentials</div>  */}
          <div className="data-description"><Link to={data.credentialURL}>Course Credentials</Link></div>
          {/* <a href={data.credentialURL}>Course Credentials</a> */}
        
      </div>
      )}
    </div>
  );
};

export default DisplayCour;
