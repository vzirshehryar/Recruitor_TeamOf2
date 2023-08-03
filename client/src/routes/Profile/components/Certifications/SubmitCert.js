import React from "react";
import AddCertifications from "./AddCertifications";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitCert = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddCertifications />
        </div>
        
        
        </>
    );
}

export default SubmitCert;