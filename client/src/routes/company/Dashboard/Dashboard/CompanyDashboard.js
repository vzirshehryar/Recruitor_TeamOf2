import React, { useState } from 'react'
import Sidebar from '../../Sidebar'
import "./CompanyDashboard.css"
import ManageJobCard from './ManageJobCard';
import RecentJobPosts from './RecentJobPosts';
import Navbar from '../../Navbar';
import Footer from '../../../Home/components/footer';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

const CompanyDashboard = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
    const handleAuth = () =>{
        const type = localStorage.getItem("userType");
        if (type !== "company")
        {
            navigate("/loginAsCompany");
        }
    }
    useEffect(() => {
        handleAuth();
      }, []);

  return (
    <>
      <Sidebar />
      <div className="company-dashboard-main-container">
        <div className="company-dashboard-welcome-div">
          <div className="company-dashboard-heading">
            <h1>Welcome to Step200</h1>
            <p>XYZ</p>
          </div>
          <div className="company-dashboard-image">
            <img src="/background.png" alt="image" />
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
      <Footer />
    </>
  );
};

export default CompanyDashboard