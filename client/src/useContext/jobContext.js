// JobContext.js
import React, { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]); // Store job information
  const [searchLocation, setSearchLocation] = useState(""); // Location search
  const [searchSector, setSearchSector] = useState(""); // Sector search

  const contextValue = {
    jobs,
    setJobs,
    searchLocation,
    setSearchLocation,
    searchSector,
    setSearchSector,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
}
