import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";

const RecentJobPosts = ({ jobs }) => {
  const [activeTableButton, setActiveTableButton] = useState();

  const buttonTabStyles = {
    backgroundColor: activeTableButton ? "#6D0E9D" : "#F4F5F9",
  };

  return (
    <>
      <div className="recent-job-table-component">
        <div className="recent-job-top-row">
          <div className="recent-job-top-row-heading">
            <h1>Recent Job Posts</h1>
          </div>
          {/* <div className="recent-job-top-row-buttons">
            <button >Monthly</button>
            <button>Weekly</button>
            <button>Today</button>
          </div> */}
        </div>
        <div>
          <table className="recent-job-table">
            <thead>
              <tr>
                <th className="recent-job-table-headings">Job Title</th>
                <th>Category</th>
                <th>Openings</th>
                <th>Applications</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs &&
                jobs.map((job, i) => {
                  return (
                    <tr key={i}>
                      <td>{job.jobTitle}</td>
                      <td>{job.jobType}</td>
                      <td>{10}</td>
                      <td>{3}</td>
                      <td>
                        <DeadlineButton deadline={job.applicationDeadline} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="recent-job-table-pagination-footer">
          <div>
            <div>
              <button className="btn-transparent">&lt;</button>
            </div>
            <div>1</div>
            <div>/</div>
            <div>16</div>
            <div>
              <button>&gt;</button>
            </div>
          </div>
          <div>
            <span>rows per page: </span>
            <div>4 &#8964;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentJobPosts;

function DeadlineButton({ deadline }) {
  const deadlineDate = new Date(deadline);

  const currentDate = new Date();

  // Compare the deadline with the current date
  const isActive = deadlineDate >= currentDate;

  return (
    <div>
      {isActive ? (
        <button style={{ backgroundColor: "#6FCF97" }}>Active</button>
      ) : (
        <button style={{ backgroundColor: "#FA976C" }}>Inactive</button>
      )}
    </div>
  );
}
