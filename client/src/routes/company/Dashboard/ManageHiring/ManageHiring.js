import React from "react";
import "./ManageHiring.css";
import ManageJobCard from "./ManageJobCard";
import RecentJobPosts from "./RecentJobPosts";
import Footer from "../../../Home/components/footer";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const ManageHiring = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="manage-hiring-main-container">
        <div className="manage-hiring-heading-div">
          <h1 className="manage-hiring-heading">Manage Hiring</h1>
        </div>
        <div className="manage-hiring-job-cards-container">
          <h3>Active Jobs</h3>
          <div className="manage-hiring-job-cards-div">
            <ManageJobCard for="post" />
            <ManageJobCard for="applied" />
            <ManageJobCard for="view" />
          </div>
        </div>
        <div className="manage-hiring-table-comp">
          <RecentJobPosts />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageHiring;
