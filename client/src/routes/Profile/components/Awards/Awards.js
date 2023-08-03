import React from "react";
import AwardsForm from "./AwardsForm";
import Sidenav from "../Sidenav";

const Awards = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <AwardsForm />
        </div>
        
        </>
    );
}

export default Awards;