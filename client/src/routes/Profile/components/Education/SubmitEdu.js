import React from "react";
import AddEducation from "../AddExperiences";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitEdu = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddEducation />
        </div>
        
        
        </>
    );
}

export default SubmitEdu;