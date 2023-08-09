import React from "react";
import PostJobs from "./PostJobs";
import Sidebar from "../../Sidebar";

const Jobs = () =>{

    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container">
            <PostJobs />
        </div>
        </>
    );
}

export default Jobs;