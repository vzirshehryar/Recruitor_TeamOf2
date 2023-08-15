import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/bs";
import { FaEllipsisH, FaEye } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { toast } from "react-toastify";

const ResumeStyle = {
  width: "500px",
  height: "100%",
  position: "absolute",
  top: "30px",
  left: "50px",
};

const ManageCandidates = ({ jobID }) => {
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

  const buttonTabStyles = {
    backgroundColor: activeTableButton ? "#6D0E9D" : "#F4F5F9",
  };

  return (
    <>
      <div className="mange-hiring-recent-job-table-component">
        <div className="manage-hiring-recent-job-top-row">
          <div className="recent-job-top-row-heading">
            <h3>Candidates</h3>
          </div>
          {/* <div className="recent-job-top-row-buttons">
            <button>Monthly</button>
            <button>Weekly</button>
            <button>Today</button>
          </div> */}
        </div>
        <div className="recent-job-post-table-container">
          <table className="recent-job-table">
            <thead>
              <tr>
                <th className="recent-job-table-headings">Name</th>
                <th>Education</th>
                <th>Applied Date</th>
                <th>Hiring Stage</th>
                <th>Resume</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length ? (
                applicants.map((applicant, i) => {
                  return (
                    <tr key={i}>
                      <td>{applicant.user.firstName}</td>
                      <td>{applicant.education.degree}</td>
                      <td>{applicant.appliedDate.substring(0, 10)}</td>
                      <td>
                        <button
                          style={{
                            borderRadius: 25,
                            padding: "3px 5px",
                            fontSize: 14,
                          }}
                        >
                          {applicant.hiringStage}
                        </button>
                      </td>
                      <td>
                        <FaEye
                          onClick={() => setDisplayResume(!displayResume)}
                          style={{ cursor: "pointer" }}
                        />
                        {displayResume && (
                          <iframe
                            src={`data:application/pdf;base64,${applicant.resume}`}
                            title="Resume"
                            style={ResumeStyle}
                          ></iframe>
                        )}
                      </td>
                      <td>
                        <FaEllipsisH />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>
                    <button
                      style={{
                        borderRadius: 25,
                        padding: "3px 5px",
                        fontSize: 14,
                      }}
                    >
                      No Post
                    </button>
                  </td>
                  <td>--</td>
                  <td>
                    <FaEllipsisH />
                  </td>
                </tr>
              )}
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

export default ManageCandidates;
