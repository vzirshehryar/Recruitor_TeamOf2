import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";

import ManageJobCard from "./ManageJobCard";
import RecentJobPosts from "./RecentJobPosts";

import { toast } from "react-toastify";
import "./ManageHiring.css";

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
    } catch (error) {
      toast.error(error);
    }
  };

  const changeJob = (id) => {
    if (selectedJob !== id) setSelectedJob(id);
  };

  return (
    <>
      <Sidebar />
      <div className="manage-hiring-main-container">
        <div className="manage-hiring-heading-div">
          <h3 className="manage-hiring-heading">Manage Hiring</h3>
        </div>
        <div className="manage-hiring-job-cards-container">
          <div className="overlay" />
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
          <RecentJobPosts jobID={selectedJob} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageHiring;
