import React, { useState } from 'react';
import "../AllApplicants/AppTable.css"
import DataFilter from './DataFilter';
import axios from 'axios';
import { useEffect } from 'react';
const ListingsTable = () => {

  const [data, setData] = useState(null);
    
  useEffect(() => {
  
    const apiUrl = '/job/getJobs';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        console.log(response.data);
        setData(response.data.jobs);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    
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
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Applicant</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your data and create table rows */}
          {/* Replace placeholders with actual data */}
          {data &&
              data.map((item, index) => {
                const currentDate = new Date();
                const applicationDeadlineDate = new Date(item.applicationDeadline);
                const isActive = currentDate <= applicationDeadlineDate;
                const status = isActive ? 'Active' : 'Inactive';
                const statusClassName = isActive ? 'status-rectangle-listings' : 'status-rectangle-listings-2';
                return (
                  <tr key={index}>
                    <td>{item.jobTitle}</td>
                    <td>{item.jobType}</td>
                    <td>08</td>
                    <td>{item.applicationDeadline}</td>
                    <td>
                    <div className={statusClassName}>
                      {status}
                    </div>
                  </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
