import React, { useState, useEffect } from "react";
import Sidebar from "../../Sidebar";
import "./CompanyDashboard.css";
import ManageJobCard from "./ManageJobCard";
import RecentJobPosts from "./RecentJobPosts";
import Footer from "../../../Home/components/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CandidatePieChart from "./CandidatePiChart";

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
      console.log(allInfo);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleAuth = () => {
    const type = localStorage.getItem("userType");
    if (type !== "company") {
      navigate("/loginAsCompany");
    }
  };
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="company-dashboard-main-container">
        <div className="company-dashboard-welcome-div">
          <div>
            <h1 className="company-dashboard-heading">Welcome to Step200</h1>
            <p className="company-dashboard-para">XYZ</p>
          </div>
          <div className="company-dashboard-image">
            <img src="/girlWithBook.png" alt="image" />
          </div>
        </div>
        <div className="company-dashboard-job-cards-container">
          <ManageJobCard for="post" />
          <ManageJobCard for="applied" />
          <ManageJobCard for="view" />
        </div>
        <div className="company-dashboard-job-table-comp">
          <RecentJobPosts jobs={allInfo.jobs} setAllInfo={setAllInfo} />
        </div>
        <div className="pie-chart-holder">
          <CandidatePieChart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyDashboard;
