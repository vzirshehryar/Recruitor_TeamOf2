import React from "react";
import AddPublications from "./AddPublications";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitPub = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddPublications />
        </div>
        
        
        </>
    );
}

export default SubmitPub;