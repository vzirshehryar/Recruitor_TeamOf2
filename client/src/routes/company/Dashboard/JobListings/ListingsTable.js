import React from 'react';
import "../AllApplicants/AppTable.css"
import DataFilter from './DataFilter';
const ListingsTable = () => {

    const data = [
        // Your data array
      ];
    
      const renderRows = () => {
        return data.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            {/* Render the cells for each column */}
          </tr>
        ));
      };
      const handleCheckboxChange = (index) => {
        // Add your logic to handle checkbox change
        // Update the data array or state accordingly
      };
  return (
    <div className="table-container2">
        <div className="listings-heading"> Job Listing</div>
        <div className="allapplicants-heading"> Jobs List</div>
        <div className="filter-data-listings"><DataFilter /></div>
      <table className="custom-table-listings">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Applicant</th>
            <th>Date Added</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your data and create table rows */}
          {/* Replace placeholders with actual data */}
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>08</td>
            <td>2023-08-09</td>
            <td><div className="status-rectangle-listings"> Hired</div></td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>12</td>
            <td>2023-08-09</td>
            <td><div className="status-rectangle-listings-2"> In Process</div></td>
          </tr>
          {/* Repeat the above structure for each row */}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
