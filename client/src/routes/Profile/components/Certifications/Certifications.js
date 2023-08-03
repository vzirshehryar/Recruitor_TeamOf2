import React from "react";
import CertForm from "./CertForm";
import Sidenav from "../Sidenav";

const Certifications = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <CertForm />
        </div>
        
        </>
    );
}

export default Certifications;