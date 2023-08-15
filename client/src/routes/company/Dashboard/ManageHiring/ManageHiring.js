import React, { useEffect, useState } from "react";
import "./ManageHiring.css";
import ManageJobCard from "./ManageJobCard";
import ManageCandidates from "./ManageCandidates";
import Footer from "../../../Home/components/footer";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageHiring = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState();

  useEffect(() => {
    if (localStorage.getItem("userType") !== "company")
      navigate("/loginAsCompany");
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    try {
      const res = await fetch("/company/manageHiringGetJobs", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setJobs(data.jobs);
      setSelectedJob(data.jobs[0]._id);
      console.log(data.jobs);
    } catch (error) {
      toast.error(error);
    }
  };

  const changeJob = (id) => {
    if (selectedJob !== id) setSelectedJob(id);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="manage-hiring-main-container">
        <div className="manage-hiring-heading-div">
          <h3 className="manage-hiring-heading">Manage Hiring</h3>
        </div>
        <div className="manage-hiring-job-cards-container">
          <h3>Active Jobs</h3>
          <div className="manage-hiring-job-cards-div">
            {jobs.length ? (
              jobs.map((job, i) => {
                return (
                  <ManageJobCard key={i} job={job} changeJob={changeJob} />
                );
              })
            ) : (
              <h4>No Jobs Yet</h4>
            )}
          </div>
        </div>
        <div className="manage-hiring-table-comp">
          <ManageCandidates jobID={selectedJob} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageHiring;
