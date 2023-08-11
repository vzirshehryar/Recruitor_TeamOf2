import React from "react";
import LangForm from "./LangForm";
import Sidenav from "../Sidenav";

const Languages = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <LangForm />
        
        </div>
        
        </>
    );
}

export default Languages;