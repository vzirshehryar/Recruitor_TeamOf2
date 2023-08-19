import React from "react";
import { BsBarChartLine } from "react-icons/bs";
import "./CompanyDashboard.css";

const ManageJobCard = (props) => {
  return (
    <>
      <div className="company-dashboard-job-card">
        <div className="company-dashbaord-job-card-top-div">
          <p className="company-dashbaord-job-card-top-div-para">
            Job {props.for}
          </p>
          {/* <div className="company-dashboard-stats-with-icon">
            <p>
              <BsBarChartLine />
            </p>
            <p>0.0</p>
          </div> */}
        </div>
        <div className="company-dashboard-job-card-middle-div">
          <p>{props.count ? props.count : 0}</p>
        </div>
        <div className="company-dashboard-job-card-bottom-div">
          <p>
            {props.for === "Post"
              ? "Jobs"
              : props.for === "Applied"
              ? "Applicants"
              : "Viewers"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ManageJobCard;
