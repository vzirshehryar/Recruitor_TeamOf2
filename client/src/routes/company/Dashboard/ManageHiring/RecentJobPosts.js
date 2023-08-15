import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaEllipsisH } from "react-icons/fa";
import { toast } from "react-toastify";

const RecentJobPosts = ({ jobID }) => {
   const [activeTableButton, setActiveTableButton] = useState();
   const [applicants, setApplicants] = useState([]);
   const [displayResume, setDisplayResume] = useState(false);
  const getAllApplicants = async () => {
    try {
      const res = await fetch(`/job/getApplicantssOfAJob/${jobID}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setApplicants(data);
      console.log(data);
    } catch (error) {
      toast.error("error in the backend");
    }
  };

  useEffect(() => {
    console.log("useEffect1");
    getAllApplicants();
    console.log("useEffect2");
  }, [jobID]);

  return (
    <div className="mange-hiring-recent-job-table-component">
      <div className="manage-hiring-recent-job-top-row">
        <div className="recent-job-top-row-heading">
          <h1>Candidates</h1>
        </div>
        <div className="manage-hiring-recent-job-top-row-buttons">
          <ButtonGroup>
            <Button>Rejected</Button>
            <Button>Selected</Button>
            <Button>All</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="recent-job-post-table-container">
        <table className="manage-hiring-recent-job-table">
          <thead className="manage-hiring-table-head">
            <tr>
              <th>Name</th>
              <th>Experience</th>
              <th>Education</th>
              <th>Hiring Stage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="manage-hiring-table-row-body">
              <td>Evan Flores</td>
              <td>2-3 years</td>
              <td>BSCS</td>
              <td>
                <Badge className="rounded-pill manage-hiring-badge">
                  Declined
                </Badge>
              </td>
              <td>
                <FaEllipsisH />
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Evan Flores</td>
              <td>2-3 years</td>
              <td>BSCS</td>
              <td>
                <Badge className="rounded-pill manage-hiring-badge">
                  Hired
                </Badge>
              </td>
              <td>
                <FaEllipsisH />
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Evan Flores</td>
              <td>2-3 years</td>
              <td>BSCS</td>
              <td>
                <Badge className="rounded-pill manage-hiring-badge">
                  Shortlisted
                </Badge>
              </td>
              <td>
                <FaEllipsisH />
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Evan Flores</td>
              <td>2-3 years</td>
              <td>BSCS</td>
              <td>
                <Badge className="rounded-pill manage-hiring-badge">
                  Shortlisted
                </Badge>
              </td>
              <td>
                <FaEllipsisH />
              </td>
            </tr>
            <tr className="manage-hiring-table-row-body">
              <td>Evan Flores</td>
              <td>2-3 years</td>
              <td>BSCS</td>
              <td>
                <Badge className="rounded-pill manage-hiring-badge">
                  Interviewed
                </Badge>
              </td>
              <td>
                <FaEllipsisH />
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
