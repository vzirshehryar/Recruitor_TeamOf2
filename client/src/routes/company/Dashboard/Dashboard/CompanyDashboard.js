import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import "./CompanyDashboard.css";
import ManageJobCard from "./ManageJobCard";
import RecentJobPosts from "./RecentJobPosts";
import Navbar from "../../Navbar";
import Footer from "../../../Home/components/footer";
// import { useState } from 'react';

const CompanyDashboard = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="company-dashboard-main-container">
        <div className="company-dashboard-welcome-div">
          <div>
            <h1 className="company-dashboard-heading">Welcome to Step200</h1>
            <p className="company-dashboard-para">XYZ</p>
          </div>
          <div className="company-dashboard-image">
            <img src="/background.png" alt="image" />
          </div>
        </div>
        <div className="company-dashboard-job-cards-container">
          <ManageJobCard for="post" />
          <ManageJobCard for="applied" />
          <ManageJobCard for="view" />
        </div>
        <div className="company-dashboard-job-table-comp">
          <RecentJobPosts />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyDashboard;
