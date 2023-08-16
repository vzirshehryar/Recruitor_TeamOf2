import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaEllipsisH } from "react-icons/fa";

const RecentJobPosts = ({ jobs, setAllInfo }) => {
  const exampleTableData = [
    {
      jobTitle: "Software Engineer",
      jobType: "Full-Time",
      numberOfOpenings: 10,
      numberOfApplications: 3,
    },
    {
      jobTitle: "Data Scientist",
      jobType: "Part-Time",
      numberOfOpenings: 5,
      numberOfApplications: 2,
    },
    {
      jobTitle: "Product Manager",
      jobType: "Full-Time",
      numberOfOpenings: 8,
      numberOfApplications: 4,
    },
    {
      jobTitle: "UI/UX Designer",
      jobType: "Contract",
      numberOfOpenings: 3,
      numberOfApplications: 1,
    },
    {
      jobTitle: "Marketing Specialist",
      jobType: "Remote",
      numberOfOpenings: 6,
      numberOfApplications: 2,
    },
    {
      jobTitle: "Sales Representative",
      jobType: "Full-Time",
      numberOfOpenings: 7,
      numberOfApplications: 3,
    },
    {
      jobTitle: "Data Analyst",
      jobType: "Part-Time",
      numberOfOpenings: 4,
      numberOfApplications: 1,
    },
    {
      jobTitle: "Project Manager",
      jobType: "Full-Time",
      numberOfOpenings: 9,
      numberOfApplications: 5,
    },
    {
      jobTitle: "Content Writer",
      jobType: "Freelance",
      numberOfOpenings: 2,
      numberOfApplications: 0,
    },
    {
      jobTitle: "Customer Support",
      jobType: "Remote",
      numberOfOpenings: 5,
      numberOfApplications: 2,
    },
  ];

  const [data, setData] = useState([jobs]);
  //for displaying the number of rows per page
  const [rowsToShow, setRowsToShow] = useState(4);

  //for actual pagination
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * rowsToShow;

  const totalPages = Math.ceil(exampleTableData.length / rowsToShow);
  // const totalPages = Math.ceil(jobs.length / rowsToShow); //actual data from db

  //for pagination
  //also use actual data here
  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsToShow;
    const endIndex = startIndex + rowsToShow;
    const paginatedData = exampleTableData.slice(startIndex, endIndex);
    setData(paginatedData);
  }, [currentPage, rowsToShow]);

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
            {jobs &&
              data.slice(0, rowsToShow).map((job, i) => {
                return (
                  <tr key={i} className="manage-hiring-table-row-body">
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
      <div className="hiring-manager-table-pagination-footer">
        <div>
          <div>
            <button
              className="pagination-button"
              disabled={currentPage <= 1}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              &lt;
            </button>
          </div>
          <div>{currentPage}</div>
          <div>/</div>
          <div>{totalPages}</div>
          <div>
            <button
              className="pagination-button"
              disabled={currentPage >= totalPages}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              &gt;
            </button>
          </div>
        </div>
        <div>
          <span>Rows per page: </span>
          <select
            name=""
            id=""
            value={rowsToShow}
            onChange={(e) => {
              setRowsToShow(e.target.value);
            }}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
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