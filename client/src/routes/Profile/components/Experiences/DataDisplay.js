import React, { useState } from 'react';
import './DataDisplay.css';

const DataDisplay = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="data-container">
      <div className="data-box">
        <div className="dots-button" onClick={toggleDropdown}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
        <div className="data-heading">Data Scientist</div>
        <div className="data-dates">1 Nov 2022 - 26 Feb 2023 (4 Months)</div>
        <div className="data-company">Company Name</div>
        <div className="data-description-heading">Description:</div>
        <div className="data-description">
          Some description goes here...
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
