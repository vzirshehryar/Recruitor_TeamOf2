import React, { useState } from "react";
import "../AllApplicants/AppTable.css";
import DataFilter from "./DataFilter";
import axios from "axios";
import { useEffect } from "react";
const ListingsTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    const apiUrl = "/job/getJobs";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: token,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log(response.data);
        setData(response.data.jobs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="table-container2">
      <div className="listings-heading"> Job Listing</div>
      <div className="allapplicants-heading"> Jobs List</div>
      {/* <div className="filter-data-listings"><DataFilter /></div> */}
      <table className="custom-table-listings">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Applicant</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your data and create table rows */}
          {/* Replace placeholders with actual data */}
          {data &&
            data
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item, index) => {
                const currentDate = new Date();
                const applicationDeadlineDate = new Date(
                  item.applicationDeadline
                );
                const isActive = currentDate <= applicationDeadlineDate;
                const status = isActive ? "Active" : "Inactive";
                const statusClassName = isActive
                  ? "status-rectangle-listings"
                  : "status-rectangle-listings-2";
                return (
                  <tr key={index}>
                    <td>{item.jobTitle}</td>
                    <td>{item.jobType}</td>
                    <td style={{ textAlign: "center" }}>08</td>
                    <td>
                      {new Date(item.applicationDeadline).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </td>
                    <td>
                      <div className={statusClassName}>{status}</div>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <div className="pagination-apptable">
        <button
          className="pagination-apptable-button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="pagination-apptable-page">
          {currentPage}
          {"/"}
          {totalPages}
        </span>
        <button
          className="pagination-apptable-button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListingsTable;
