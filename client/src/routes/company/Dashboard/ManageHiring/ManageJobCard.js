import React from "react";
import { BsBarChartLine } from "react-icons/bs";

const ManageJobCard = (props) => {
  return (
    <>
      <div className="manage-hiring-job-card">
        <div className="manage-hiring-job-card-top-div">
          <p className="manage-hiring-job-card-top-div-para">Title</p>
          <div className="manage-hiring-stats-with-icon">
            <p>See Details</p>
          </div>
        </div>
        <div className="manage-hiring-job-card-middle-div">
          <p>Candidates</p>
        </div>
        <div className="manage-hiring-job-card-bottom-div">
          <div className="manage-hiring-job-card-count-div">
            <div>
              <p>Total</p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                13
              </p>
            </div>
            <div>
              <p>New</p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                3
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageJobCard;
