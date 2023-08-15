import React, { useState } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import { useEffect } from 'react';

const DisplayLang = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    
    const apiUrl = '/user/language/getData';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.languages[0]);
        
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
        
          <div className="data-heading">{data.language}</div>
          
          <div className="data-company">Speaking Level: {data.speakingLevel}</div>
          <div className="data-company">Listening Level: {data.listeningLevel}</div>
          <div className="data-company">Reading Level: {data.readingLevel}</div>
          <div className="data-company">Writing Level: {data.writingLevel}</div>
          
        
      </div>
      )}
    </div>
  );
};

export default DisplayLang;
