import React from "react";
import AddPublications from "./AddPublications";
import DisplayPub from "./DisplayPublications";
import Sidenav from "../Sidenav";

const SubmitPub = () => {
    return(
        <>
        <Sidenav />
        <DisplayPub />
        <div className="profile-component-container-all">
        <AddPublications />
        </div>
        
        
        </>
    );
}

export default SubmitPub;