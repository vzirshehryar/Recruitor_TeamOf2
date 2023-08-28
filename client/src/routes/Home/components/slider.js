import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useJobContext } from "../../../useContext/jobContext";
import Style from "../home.module.css";
import { FaAngleRight } from "react-icons/fa";

function Slider() {
  const { setSearchLocation, setSearchSector } = useJobContext();
  const navigate = useNavigate();
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  function loginButton() {
    navigate("/LoginAsCompany");
  }
  const handleSearch = () => {
    setSearchLocation(where);
    setSearchSector(what);
    navigate("/jobfeed");
  };

  return (
    <div className={`${Style.HomeSlider}`}>
      <h1 className={`${Style.h1}`}>Discover Your Dream Career</h1>
      <h3 className={`${Style.h3}`}>find a job you’ll love</h3>
      <div>
        <div className="d-flex flex-column">
          <label for="what">What</label>
          <input
            placeholder='e.g. "teacher"'
            value={what}
            onChange={(e) => setWhat(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column">
          <label for="where">Where</label>
          <input
            placeholder="town or postcode"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSearch}>Search Jobs</button>
          <Link to="">
            Browse Jobs
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;
