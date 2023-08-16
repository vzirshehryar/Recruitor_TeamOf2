import React, { useEffect, useState } from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import Header from "../Home/components/header";
import Footer from "../Home/components/footer";
import "./UserSide.css";
// import { jobList, JobDetail } from "./components/Data";
import JobCard from "./components/jobCard";
import seach from "../../assests/images/search.png";
import loc from "../../assests/images/location.png";
import JobNav from "./components/JobNav";
import { useNavigate } from "react-router-dom";

const bacgroundSelect = {
  background: "rgba(109, 14, 157, 0.19)",
};

function JobFeed() {
  const [location, setLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobList, setJobList] = useState([]);
  const [selectedJob, setSelectedJob] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(0);
  const [jobType, setJobType] = useState([]);
  const [jobLevel, setJobLevel] = useState([]);

  useEffect(() => {
    getAllJobs();

    setSelected(0);
  }, [currentPage]);

  const jobsPerPage = 6;

  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearchKeyword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setCurrentPage(1);
    setLocation(event.target.value);
  };

  const filteredJobs = jobList.filter((job) => {
    // const titleMatch = job.title
    //   .toLowerCase()
    //   .includes(searchKeyword.toLowerCase());
    // const locationMatch = job.companyLocation
    //   .toLowerCase()
    //   .includes(location.toLowerCase());
    // return titleMatch && locationMatch;
    console.log(!jobType.length, !jobLevel.length);
    if (!jobType.length && !jobLevel.length) return true;

    for (const word of jobType) {
      if (job.jobType === word) return true;
    }
    for (const word of jobLevel) {
      if (job.jobLevel === word) return true;
    }
    // if(jobType.lenght)
    return false;
  });

  const sortedCurrentJobs = [...filteredJobs].sort((a, b) => {
    const titleA = a.jobTitle.toLowerCase();
    const titleB = b.jobTitle.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  // const totalJobs = filteredJobs.length;
  const totalJobs = sortedCurrentJobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  // const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const currentJobs = sortedCurrentJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setJobIndex = (id) => {
    const selectedItem = jobList.find((item) => item._id === id);
    if (selectedItem) {
      setSelectedJob(selectedItem);
    } else {
      setSelectedJob(jobList[selected]);
    }
  };

  const getAllJobs = async () => {
    const newJobs = await fetch("/job/getalljobs");
    const resJobs = await newJobs.json();
    setJobList(resJobs.jobs);
    setSelectedJob(resJobs.jobs[0]);
  };

  const forBackgroundSelection = (index) => {
    if (index === selected) return true;
    return false;
  };

  const Search = (jt, jl) => {
    console.log("searched called");
    setJobType(jt);
    setJobLevel(jl);
  };

  return (
    <>
      <Header />
      <div className="jobFeedPage">
        <JobNav Search={Search} />
        {/*<Container>
          <Row className="pt-5 pb-5 searchCont">
            <div className="searchJobCont mx-3">
              <p className="searchJobFieldText">What</p>
              <input
                type="text"
                className="form-control searchJobField"
                placeholder="Job title, Description etc."
                value={searchKeyword}
                onChange={handleSearch}
              />
              <img className="searchJobIcon" alt="searchIcon" src={seach} />
            </div>
            <div className="searchLocCont mx-3">
              <p className="searchLocFieldText">Where</p>
              <input
                type="text"
                className="form-control searchLocField"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
              <img className="searchLocIcon" alt="locationIcon" src={loc} />
            </div>
          </Row>
        </Container>*/}
        <Container fluid className="jobFeedContainer">
          <Container>
            <Row className="pt-4 pb-5 jobFeedDisplay">
              <div
                className="col-lg-5 jobFeedList"
                style={{
                  paddingRight: "3px",
                  maxHeight: "600px",
                  overflowY: "auto",
                }}
              >
                <div
                  className="JOBS"
                  style={{ position: "sticky", top: "0px" }}
                >
                  JOBS
                </div>
                {currentJobs.map((item, index) => (
                  <div
                    key={index}
                    className="displayJobs p-2"
                    onClick={() => {
                      setSelected(index);
                      setJobIndex(item._id);
                      // window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={forBackgroundSelection(index) ? bacgroundSelect : {}}
                  >
                    <Row>
                      <div className="col-lg-10 d-flex gap-1">
                        <div className="capitalLetter">
                          <p className="p-0 m-0">
                            {item.jobTitle[0].toUpperCase()}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{ lineHeight: "1.5" }}
                            className="displayJobTitle p-0 m-0"
                          >
                            {item.jobTitle}
                          </p>
                          <p className="p-0 m-0 displayJobLocation">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <p className="displayJobPay">
                          {item.minSR ? item.minSR : "Unpaid"}
                        </p>
                      </div>
                    </Row>
                    <div style={{ display: "flex", marginTop: 0 }}>
                      <p className="displayJobDescription">
                        <strong>Job Description : </strong>
                      </p>
                      <p
                        className="displayJobDescription2"
                        style={{ maxWidth: "60%", marginTop: "10px" }}
                      >
                        {item.jobDescription}
                        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...... */}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="text-center mt-4 custom-pagination">
                    <Pagination>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                          key={index + 1}
                          active={index + 1 === currentPage}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </Pagination.Item>
                      ))}
                    </Pagination>
                  </div>
                )}
              </div>

              <div className="col-lg-7 p-0">
                {selectedJob && <JobCard selectedJob={selectedJob} />}
              </div>
            </Row>
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default JobFeed;
