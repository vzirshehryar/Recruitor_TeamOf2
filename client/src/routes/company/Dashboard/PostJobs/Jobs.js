import React from "react";
import PostJobs from "./PostJobs";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Jobs = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    const type = localStorage.getItem("userType");
    if (type !== "company") {
      navigate("/loginAsCompany");
    }
  };
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="dashboard-component-container">
        <PostJobs />
        <Footer />
      </div>
    </>
  );
};

export default Jobs;
