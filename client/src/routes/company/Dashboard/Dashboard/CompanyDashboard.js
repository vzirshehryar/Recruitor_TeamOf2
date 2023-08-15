import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar";
import "./CompanyDashboard.css";
import ManageJobCard from "./ManageJobCard";
import RecentJobPosts from "./RecentJobPosts";
import Navbar from "../../Navbar";
import Footer from "../../../Home/components/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useState } from 'react';

const CompanyDashboard = () => {
  const [nav, setNav] = useState(false);
  const [allInfo, setAllInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userType") !== "company")
      navigate("/loginAsCompany");
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const res = await fetch("/company/getDashboard", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setAllInfo(data);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="company-dashboard-main-container">
        <div className="company-dashboard-welcome-div">
          <div className="company-dashboard-heading">
            <h1>Welcome to Step200</h1>
            <p>XYZ</p>
          </div>
          <div className="company-dashboard-image">
            <img src="/girlWithBook.png" alt="image" />
          </div>
        </div>
        <div className="company-dashboard-job-cards-div">
          <ManageJobCard for="post" count={allInfo.jobPosted} />
          <ManageJobCard for="applied" count={allInfo.applied} />
          {/* <ManageJobCard for="view" /> */}
        </div>
        <div className="company-dashboard-job-table-comp">
          <RecentJobPosts jobs={allInfo.jobs} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyDashboard;
