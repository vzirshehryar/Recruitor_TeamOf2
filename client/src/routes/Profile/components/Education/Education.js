import React from "react";
import EduForm from "./EduForm";
import Sidenav from "../Sidenav";

const Education = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <EduForm />
        </div>
        
        </>
    );
}

export default Education;