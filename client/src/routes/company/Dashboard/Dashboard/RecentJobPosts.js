import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaEllipsisH } from "react-icons/fa";

const RecentJobPosts = () => {
  return (
    <div className="mange-hiring-recent-job-table-component">
      <div className="manage-hiring-recent-job-top-row">
        <div className="recent-job-top-row-heading">
          <h1
            className="
          company-dashboard-recent-job-top-row-heading"
          >
            Recent Job Posts
          </h1>
        </div>
        <div className="manage-hiring-recent-job-top-row-buttons">
          <ButtonGroup>
            <Button>Monthly</Button>
            <Button>Weekly</Button>
            <Button>Today</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="recent-job-post-table-container">
        <table className="company-dashboard-recent-job-table">
          <thead className="manage-hiring-table-head">
            <tr>
              <th>Job Title</th>
              <th>Category</th>
              <th>Openings</th>
              <th>Applications</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="manage-hiring-table-row-body">
              <td>UI UX Designer</td>
              <td>Full Time</td>
              <td>12</td>
              <td>45</td>
              <td>
                <Button>Inactive</Button>
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Fullstack Dev</td>
              <td>Full Time</td>
              <td>08</td>
              <td>05</td>
              <td>
                <Button>Inactive</Button>
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>DevOps</td>
              <td>Internship</td>
              <td>12</td>
              <td>100</td>
              <td>
                <Button>Inactive</Button>
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Mobile App Dev</td>
              <td>Full Time</td>
              <td>04</td>
              <td>135</td>
              <td>
                <Button>Inactive</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hiring-manager-table-pagination-footer">
        <div>
          <div>
            <button className="pagination-button">&lt;</button>
          </div>
          <div>1</div>
          <div>/</div>
          <div>16</div>
          <div>
            <button className="pagination-button">&gt;</button>
          </div>
        </div>
        <div>
          <span>Rows per page: </span>
          <button className="pagination-button">4 &or;</button>
        </div>
      </div>
    </div>
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
