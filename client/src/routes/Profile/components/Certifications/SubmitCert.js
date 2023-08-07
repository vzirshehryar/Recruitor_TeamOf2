import React from "react";
import AddCertifications from "./AddCertifications";
import DisplayCertifications from "./DisplayCertifications";
import Sidenav from "../Sidenav";

const SubmitCert = () => {
    return(
        <>
        <Sidenav />
        <DisplayCertifications />
        <div className="profile-component-container-all">
        <AddCertifications />
        </div>
        
        
        </>
    );
}

export default SubmitCert;