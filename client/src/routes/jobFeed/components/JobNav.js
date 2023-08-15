import React, { useState } from "react";
import "./jobNav.css";

const JobNav = ({ Search }) => {
  const [openJT, setOpenJT] = useState(false);
  const [openJL, setOpenJL] = useState(false);

  const [jobType, setJobType] = useState([]);
  const [jobLevel, setJobLevel] = useState([]);

  const jobTypeChange = (val) => {
    if (jobType.includes(val)) {
      setJobType(jobType.filter((item) => item !== val));
    } else {
      setJobType([...jobType, val]);
    }
  };
  const jobLevelChange = (val) => {
    if (jobLevel.includes(val)) {
      setJobLevel(jobLevel.filter((item) => item !== val));
    } else {
      setJobLevel([...jobLevel, val]);
    }
  };

  return (
    <div className="jobFeedFilter">
      <div className="filter">
        <p>Job Type</p>
        <img
          src="/filterIcon.png"
          alt="filter icon"
          width={15}
          height={15}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpenJT(!openJT);
          }}
        />
        <div
          className="dropDown"
          style={openJT ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <input
              type="checkbox"
              id="partTime"
              name="jobType"
              checked={jobType.includes("Part Time")}
              onChange={() => jobTypeChange("Part Time")}
            />
            <label style={{ marginLeft: 5 }} for="partTime">
              Part Time
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fullTime"
              name="jobType"
              checked={jobType.includes("Full Time")}
              onChange={() => jobTypeChange("Full Time")}
            />
            <label style={{ marginLeft: 5 }} for="fullTime">
              Full Time
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="contract"
              name="jobType"
              checked={jobType.includes("Contract")}
              onChange={() => jobTypeChange("Contract")}
            />
            <label style={{ marginLeft: 5 }} for="contract">
              Contract
            </label>
          </div>
        </div>
      </div>
      <div className="filter">
        <p>Job Level</p>
        <img
          src="/filterIcon.png"
          alt="filter icon"
          width={15}
          height={15}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpenJL(!openJL);
          }}
        />
        <div
          className="dropDown"
          style={openJL ? { display: "flex" } : { display: "none" }}
        >
          <div>
            <input
              type="checkbox"
              id="beginner"
              name="jobLevel"
              checked={jobLevel.includes("Beginner")}
              onChange={() => jobLevelChange("Beginner")}
            />
            <label style={{ marginLeft: 5 }} for="beginner">
              Beginner
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="intermediate"
              name="jobLevel"
              checked={jobLevel.includes("Intermediate")}
              onChange={() => jobLevelChange("Intermediate")}
            />
            <label style={{ marginLeft: 5 }} for="intermediate">
              Intermediate
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="expert"
              name="jobLevel"
              checked={jobLevel.includes("Expert")}
              onChange={() => jobLevelChange("Expert")}
            />
            <label style={{ marginLeft: 5 }} for="expert">
              Expert
            </label>
          </div>
        </div>
      </div>
      <div className="applyFilter" onClick={() => Search(jobType, jobLevel)}>
        <p>Apply Filter</p>
      </div>
    </div>
  );
};

export default JobNav;
