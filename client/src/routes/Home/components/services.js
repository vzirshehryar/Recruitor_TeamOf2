import { useState } from "react"; // Importing useState from React

import Style from "../home.module.css"; // Importing CSS styles
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; // Importing icons

// Sample job categories
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

// Services component
function Services() {
  const [more, setMore] = useState(false); // State variable to track whether "See more" is clicked
  const [select, setSelect] = useState("sector"); // State variable to track the selected search option

  return (
    <div className={`${Style.TrendingJobs}`}>
      {/* Navigation between search options */}
      <div className="mt-4 d-flex align-center justify-content-center gap-3 mb-2">
        {/* Search by Sector option */}
        <p
          className={`px-3 py-0 cursor-pointer ${
            select === "sector" ? Style.serviceactive : ""
          }`}
          onClick={() => setSelect("sector")} // Set "sector" as the selected option
        >
          Search by Sector
        </p>
        {/* Search by Location option (commented out) */}
        {/* <p
          className={`px-3 py-2 cursor-pointer ${
            select === "location" ? Style.serviceactive : ""
          }`}
          onClick={() => setSelect("location")}
        >
          Search by Location
        </p> */}
      </div>

      {/* Job search sections */}
      <div className="mt-3 d-flex flex-wrap justify-content-center gap-3">
        {/* Sample job categories */}
        <div>
          <img  style={{ width:"220px" }}src="/TechnologyJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>IT & TELECOM</p>
        </div>
        <div>
          <img style={{ width:"220px" }} src="/EngineeringJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Customer Service</p>
        </div>
        <div>
          <img style={{ width:"220px" }} src="/GraduatesJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Art</p>
        </div>
        <div>
          <img style={{ width:"220px" }} src="/HealthJobs.png" alt="image" />
          <p style={{ textAlign: "left", paddingTop: "5px" }}>Admin, Secreterial & PA</p>
        </div>
      </div>
{/*
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
      */}
    </div>
  );
}

export default Services; // Export the Services component
