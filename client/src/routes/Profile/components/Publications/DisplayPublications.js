import React, { useState } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayPub = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    
    const apiUrl = '/user/publication/getData ';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.publications[0]);
        
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
        
          <div className="data-heading">{data.publicationTitle}</div>
          <div className="data-dates">
            {data.publishedDate}
          </div>
          <div className="data-company">{data.members}</div>
          {/* <div className="data-description-heading">Description:</div> */}
          {/* <div className="data-description">{data.school}</div> */}
          <div className="data-description">
            {/* Use the 'a' tag to redirect to the external URL */}
            <a href={data.publicationURL} target="_blank" rel="noopener noreferrer">
              Read Now
            </a>
          </div>
        
      </div>
      )}
    </div>
  );
};

export default DisplayPub;
