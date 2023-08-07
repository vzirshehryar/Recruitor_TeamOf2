import React from "react";
import AddLanguages from "./AddLanguages";
import DisplayLang from "./DisplayLanguages";
import Sidenav from "../Sidenav";

const SubmitLang = () => {
    return(
        <>
        <Sidenav />
        <DisplayLang />
        <div className="profile-component-container-all">
        <AddLanguages />
        </div>
        
        
        </>
    );
}

export default SubmitLang;