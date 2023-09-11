import React, { useState } from "react";
import "../Experiences/DataDisplay.css";
import axios from "axios";
import { useEffect } from "react";

const DisplayEdu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const apiUrl = "/user/education/getData";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: token,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.educations);
        if (response.data.educations.length)
          localStorage.setItem("qualification", "1");
        else localStorage.removeItem("qualification");
        // console.log(response.data.educations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openEditor = () => {};

  return (
    <div style={{ padding: "18px 16px 0 16px" }}>
      {data &&
        data.map((experience) => (
          <div
            className="otherDataAboutUser"
            style={{
              marginBottom: "15px",
            }}
            key={experience._id}
          >
            <div
              className="d-flex align-items-center"
              style={{ justifyContent: "space-between" }}
            >
              <h4
                className="p-0 m-0"
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                {experience.school}
              </h4>
              {/* <span
                style={{
                  color: "#1e1ef0",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                onClick={openEditor}
              >
                Edit
              </span> */}
            </div>
            <p
              className="p-0 m-0"
              style={{ fontSize: "16px", fontWeight: "300" }}
            >
              {experience.degree}
            </p>
            <p
              className="p-0 m-0"
              style={{ fontSize: "16px", fontWeight: "300" }}
            >
              {experience.startYear} - {experience.endYear}
            </p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default DisplayEdu;
