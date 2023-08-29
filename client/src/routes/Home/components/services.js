import { useState } from "react";

import Style from "../home.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const jobs = [
  "sdlfkj",
  "Administrative Jobs",
  "sdlfkj",
  "lkjsdflkja",
  "Part Time Jobs",
  "sdlfkj",
  "sdlfkj",
  "Accountant Jobs",
  "Warehouse",
];

function Services() {
  const [more, setMore] = useState(false);
  const [select, setSelect] = useState("sector");
  return (
    <div className={`${Style.TrendingJobs}`}>
      <h5 className={`${Style.h5}`}>Trending Jobs</h5>
      {/* <div
        className="mt-3 d-flex flex-wrap justify-content-center gap-3"
        style={{ maxWidth: "900px" }}
      >
        {jobs.map((job) => (
          <div className={`${Style.JobBox}`}>{job}</div>
        ))}
      </div> */}
      <div className="mt-4 d-flex align-center justify-content-center gap-3 mb-2">
        <p
          className={`px-3 py-2 cursor-pointer ${
            select === "sector" ? Style.serviceactive : ""
          }`}
          onClick={() => setSelect("sector")}
        >
          Search by Sector
        </p>
        <p
          className={`px-3 py-2 cursor-pointer ${
            select === "location" ? Style.serviceactive : ""
          }`}
          onClick={() => setSelect("location")}
        >
          Search by Location
        </p>
      </div>
      {/*SEARCH SECTIONS STARTED */}
      <div className="mt-3 d-flex flex-wrap justify-content-center gap-4">
        <div>
          <img src="/TechnologyJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Technology</p>
        </div>
        <div>
          <img src="/EngineeringJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Engineering</p>
        </div>
        <div>
          <img src="/GraduatesJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Graduates</p>
        </div>
        <div>
          <img src="/HealthJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Health</p>
        </div>
      </div>
      <div className={`${Style.seemore}`} onClick={() => setMore(!more)}>
        {!more ? (
          <>
            See more Sectors <FaAngleDown />
          </>
        ) : (
          <>
            See less Sectors <FaAngleUp />
          </>
        )}
      </div>
      {/*SEARCH SECTIONS ENDED */}
    </div>
  );
}

export default Services;
