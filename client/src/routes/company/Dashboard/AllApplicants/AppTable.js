import React, { useState } from "react";
import "./AppTable.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Function to get a status icon based on the given status.
const getStatusIcon = (status) => {
  switch (status) {
    case "On Going":
      return (
        <div className="status-rectangle">
          {/* Status icon for "On Going" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#007F00" />
          </svg>
          Ongoing
        </div>
      );
    case "Cancel":
      return (
        <div className="status-rectangle-cancel">
          {/* Status icon for "Cancel" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#F90000" />
          </svg>
          Cancel
        </div>
      );
    case "Hold":
      return (
        <div className="status-rectangle-hold">
          {/* Status icon for "Hold" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#F99500" />
          </svg>
          Hold
        </div>
      );
    default:
      return null;
  }
};

const AppTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Name");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hiringStage, setHiringStage] = useState([]);
  const [update, setUpdate] = useState(true);
  const itemsPerPage = 10;
  const token = localStorage.getItem("token");

  // Function to handle the filter dropdown.
  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle changing the sort option.
  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
    setShowDropdown(false);
  };

  // Fetch data from the API when the component mounts or when "update" state changes.
  useEffect(() => {
    const apiUrl = "/job/getallapplicants";
    const headers = {
      Authorization: token,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.applicants);
        const res = response.data.applicants;
        const initialSelectedExperiences = [];
        for (let i = 0; i < res.length; i++) {
          initialSelectedExperiences.push(res[i].hiringStage);
        }
        setHiringStage(initialSelectedExperiences);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  // Calculate pagination variables.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle navigation to the post jobs page.
  const handlePost = () => {
    navigate("/postjobs");
  };

  // Function to change the hiring stage for an applicant.
  const ChangeHiringStage = (index, value) => {
    var newArr = hiringStage;
    newArr[index] = value;
    setHiringStage([...newArr]);
    fetch(`/job/changeStage/${data[index].jobID}/${data[index]._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ stage: value }),
    });
  };

  // Function to delete an application.
  const deleteApplication = async (application) => {
    const deleteIt = window.confirm("Do you want to delete it?");
    if (!deleteIt) return;

    try {
      const res = await fetch(
        `/job/deleteApplication/${application.jobID}/${application._id}`,
        {
          method: "delete",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw Error("Backend Error Occured");
      }
    } catch (err) {
      console.log("error Toast");
      toast.error("Backend Error Occured");
      return;
    }
    console.log("succeess");
    toast.success("Application Deleted Successfully");

    setUpdate(!update);
  };

  return (
    <>
      {/* ... (the JSX code you provided) */}
    </>
  );
};

export default AppTable;
