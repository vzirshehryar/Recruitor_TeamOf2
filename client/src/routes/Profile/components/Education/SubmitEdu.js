import React from "react";
import AddEducation from "./AddEducation";
import DisplayEdu from "./DisplayEducation";
import Sidenav from "../Sidenav";

const SubmitEdu = () => {
    return(
        <>
        <Sidenav />
        <DisplayEdu />
        <div className="profile-component-container-all">
        <AddEducation />
        </div>
        
        
        </>
    );
}

export default SubmitEdu;