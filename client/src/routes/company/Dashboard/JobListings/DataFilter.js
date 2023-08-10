import React, { useState } from 'react';
import './DataFilter.css';

const DataFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="date-filter-container">
      <div className="date-filter">
        <button
          className={`filter-button ${activeFilter === 'Monthly' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`filter-button ${activeFilter === 'Weekly' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Weekly')}
        >
          Weekly
        </button>
        <button
          className={`filter-button ${activeFilter === 'Today' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Today')}
        >
          Today
        </button>
      </div>
    </div>
  );
};

export default DataFilter;
