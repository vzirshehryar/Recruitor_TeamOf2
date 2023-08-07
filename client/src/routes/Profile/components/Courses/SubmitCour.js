import React from "react";
import AddCourses from "./AddCourses";
import DisplayCour from "./DisplayCourses";
import Sidenav from "../Sidenav";

const SubmitCour = () => {
    return(
        <>
        <Sidenav />
        <DisplayCour />
        <div className="profile-component-container-all">
        <AddCourses />
        </div>
        
        
        </>
    );
}

export default SubmitCour;