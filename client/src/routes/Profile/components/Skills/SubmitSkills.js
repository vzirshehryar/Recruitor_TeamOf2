import React from "react";
import AddSkills from "./AddSkills";
import DisplaySkills from "./DisplaySkills";
import Sidenav from "../Sidenav";

const SubmitSkills = () => {
    return(
        <>
        <Sidenav />
        <DisplaySkills />
        <div className="profile-component-container-all">
        <AddSkills />
        </div>
        
        
        </>
    );
}

export default SubmitSkills;