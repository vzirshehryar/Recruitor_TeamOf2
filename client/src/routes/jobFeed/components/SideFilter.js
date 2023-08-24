import React, { useState } from "react";

import Style from "./SideFilter.module.css";
import { Row } from "react-bootstrap";

const optionsOfSpecialism = [
  "IT & Telecom",
  "Admin, Secreterial & PA",
  "Accountance",
  "Customer Service",
  "Sale",
];
const optionsOfJobtyp = [
  "Permanent",
  "Temporary",
  "Contract",
  "Full-Time",
  "Part-Time",
];
const optionsOfPostedby = ["Agency", "Employee", "Reed"];

const SideFilter = () => {
  const [distance, setDistance] = useState("0 miles");
  const [salaryFrom, setSalaryFrom] = useState("$ Any");
  const [salaryTo, setSalaryTo] = useState("$ Any");
  const [datePosted, setDatePosted] = useState("Anytime");

  // CHECKBOXES
  const [remote, setRemote] = useState(false);
  const [selectedJobtype, setSelectedJobtype] = useState([]);
  const [selectedPostedby, setSelectedPostedby] = useState([]);
  const [selectedSpecialism, setSelectedSpecialism] = useState([]);

  const handleJobtype = (option) => {
    if (selectedJobtype.includes(option)) {
      setSelectedJobtype(selectedJobtype.filter((item) => item !== option));
    } else {
      setSelectedJobtype([...selectedJobtype, option]);
    }
    console.log(selectedJobtype);
  };
  const handlePostedby = (option) => {
    if (selectedPostedby.includes(option)) {
      setSelectedPostedby(selectedPostedby.filter((item) => item !== option));
    } else {
      setSelectedPostedby([...selectedPostedby, option]);
    }
    console.log(selectedPostedby);
  };
  const handleSpecialism = (option) => {
    if (selectedSpecialism.includes(option)) {
      setSelectedSpecialism(
        selectedSpecialism.filter((item) => item !== option)
      );
    } else {
      setSelectedSpecialism([...selectedSpecialism, option]);
    }
    console.log(selectedSpecialism);
  };

  return (
    <>
      <Row
        className={`pt-4 pb-5 SideFilter ${Style.SideFilter}`}
        style={{ minWidth: "230px" }}
      >
        <div>
          <h3 className={Style.h3}>Filter By</h3>
          {/* ---------- DISTANCE ---------- */}
          <div className="pt-4 pb-4">
            <h5 className={Style.h5}>Distance</h5>
            <select
              className={Style.select}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            >
              <option value="0 miles">0 miles</option>
              <option value="3 miles">3 miles</option>
              <option value="10 miles">10 miles</option>
              <option value="15 miles">15 miles</option>
              <option value="20 miles">20 miles</option>
              <option value="25 miles">25 miles</option>
            </select>
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- SALARY RANGE ---------- */}
          <div className="pt-4 pb-4">
            <h5 className={Style.h5}>Salary Range</h5>
            <p className={`${Style.p} mt-2 mb-1`}>From</p>
            <select
              className={Style.select}
              value={salaryFrom}
              onChange={(e) => setSalaryFrom(e.target.value)}
            >
              <option value="$ Any">$ Any</option>
              <option value="$300">$300</option>
              <option value="$500">$500</option>
              <option value="$800">$800</option>
              <option value="$1000">$1000</option>
              <option value="$1200">$1200</option>
              <option value="$1400">$1400</option>
            </select>
            <p className={`${Style.p} mt-2 mb-1`}>To</p>
            <select
              className={Style.select}
              value={salaryTo}
              onChange={(e) => setSalaryTo(e.target.value)}
            >
              <option value="$ Any">$ Any</option>
              <option value="$300">$300</option>
              <option value="$500">$500</option>
              <option value="$800">$800</option>
              <option value="$1000">$1000</option>
              <option value="$1200">$1200</option>
              <option value="$1400">$1400</option>
            </select>
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- JOB TYPE ---------- */}
          <div className={`${Style.JobType} pt-4 pb-4`}>
            <h5 className={`${Style.h5}`}>Job Type</h5>
            {optionsOfJobtyp.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={selectedJobtype.includes(option)}
                  onChange={() => handleJobtype(option)}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- WORK FROM HOME ---------- */}
          <div className="pt-4 pb-4">
            <label>
              <input
                type="checkbox"
                checked={remote}
                onChange={() => setRemote(!remote)}
              />{" "}
              Work From Home
            </label>
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- POSTED BY ---------- */}
          <div className={`${Style.JobType} pt-4 pb-4`}>
            <h5 className={`${Style.h5}`}>Posted By</h5>
            {optionsOfPostedby.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={selectedPostedby.includes(option)}
                  onChange={() => handlePostedby(option)}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- DATE POSTED ---------- */}
          <div className="pt-4 pb-4">
            <h5 className={Style.h5}>Date Posted</h5>
            <select
              className={Style.select}
              value={datePosted}
              onChange={(e) => setDatePosted(e.target.value)}
            >
              <option value="Today">Today</option>
              <option value="Last Week">Last Week</option>
              <option value="Last Month">Last Month</option>
            </select>
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
          {/* ---------- Specialism ---------- */}
          <div className={`${Style.JobType} pt-4 pb-4`}>
            <h5 className={`${Style.h5}`}>Specialism</h5>
            {optionsOfSpecialism.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={selectedSpecialism.includes(option)}
                  onChange={() => handleSpecialism(option)}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <hr style={{ borderTop: "1px solid #CF1350", margin: 0 }} />
        </div>
      </Row>
    </>
  );
};

export default SideFilter;
