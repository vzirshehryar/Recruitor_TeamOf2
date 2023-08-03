import React from "react";
import AddExperiences from "../AddExperiences";
import DataDisplay from "./DataDisplay";
import Sidenav from "../Sidenav";

const SubmitExp = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddExperiences />
        </div>
        
        
        </>
    );
}

export default SubmitExp;