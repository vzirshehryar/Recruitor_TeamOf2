import React from "react";
import AddLanguages from "./AddLanguages";
import DataDisplay from "../Experiences/DataDisplay";
import Sidenav from "../Sidenav";

const SubmitLang = () => {
    return(
        <>
        <Sidenav />
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddLanguages />
        </div>
        
        
        </>
    );
}

export default SubmitLang;