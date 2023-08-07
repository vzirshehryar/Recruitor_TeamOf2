import React from "react";
import AddAwards from "./AddAwards";
import DisplayAwards from "./DisplayAwards";
import Sidenav from "../Sidenav";

const SubmitAwards = () => {
    return(
        <>
        <Sidenav />
        <DisplayAwards />
        <div className="profile-component-container-all">
        <AddAwards />
        </div>
        
        
        </>
    );
}

export default SubmitAwards;