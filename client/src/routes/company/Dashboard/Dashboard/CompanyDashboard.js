import React, { useState } from 'react'
import Sidebar from '../../Sidebar'
import "./CompanyDashboard.css"
import ManageJobCard from './ManageJobCard';
import RecentJobPosts from './RecentJobPosts';
// import { useState } from 'react';

const CompanyDashboard = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {nav && <Sidebar />}
      <div className="company-dashboard-main-container">
        <div className="company-dashboard-welcome-div">
          <div className="company-dashboard-heading">
            <h1>Welcome to Step200</h1>
            <p>XYZ</p>
          </div>
          <div>
            <img
              className="company-dashboard-image"
              src="/background.png"
              alt="image"
            />
          </div>
        </div>
        <div className="company-dashboard-job-cards-div">
          <ManageJobCard for="post" />
          <ManageJobCard for="applied" />
          <ManageJobCard for="view" />
        </div>
        <div className="company-dashboard-job-table-comp">
          <RecentJobPosts />
        </div>
      </div>
      {/* <div className="manage-hiring-main-container">
        <div className="manage-welcome-div">
          <div className="manage-heading">
            <h1>Welcome to Step200</h1>
            <p>XYZ</p>
          </div>
          <div>
            <img src="/background.png" alt="image" />
          </div>
        </div>
        <div className="manage-hiring-job-cards-div">
          <ManageJobCard for="post" />
          <ManageJobCard for="applied" />
          <ManageJobCard for="view" />
        </div>
        <div className="manage-hiring-job-table-comp">
          <RecentJobPosts />
        </div>
      </div> */}
    </>
  );
};

export default CompanyDashboard