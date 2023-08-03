import React from "react";
import AddAwards from "./AddAwards";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitAwards = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddAwards />
        </div>
        
        
        </>
    );
}

export default SubmitAwards;