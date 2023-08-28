import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./jobNav.css";
import { Link } from "react-router-dom";

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
        <label for="what">What</label>
        <input placeholder='e.g. "teacher"' value="" />
      </div>
      <div className="filter">
        <label for="where">Where</label>
        <input placeholder="town or postcode" value="" />
      </div>
      <div className="filter">
        <button>Search Jobs</button>
        <Link to="">
          Browse Jobs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.126247 0.109456C-0.0420828 0.255398 -0.0420828 0.492016 0.126247 0.637958L3.95939 3.9613L0.126247 7.28463C-0.0420828 7.43057 -0.0420828 7.66719 0.126247 7.81313C0.294576 7.95908 0.567492 7.95908 0.735822 7.81313L4.87375 4.22555C4.95459 4.15546 5 4.06041 5 3.9613C5 3.86218 4.95459 3.76713 4.87375 3.69704L0.735822 0.109456C0.567492 -0.0364854 0.294576 -0.0364854 0.126247 0.109456Z"
              fill="#1E1EF0"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default JobNav;

{
  /* <div className="filter">
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
      </div> */
}
