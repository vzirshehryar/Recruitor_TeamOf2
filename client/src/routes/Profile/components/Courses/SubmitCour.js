import React from "react";
import AddCourses from "./AddCourses";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitCour = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddCourses />
        </div>
        
        
        </>
    );
}

export default SubmitCour;