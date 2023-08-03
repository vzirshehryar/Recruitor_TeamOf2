import React from "react";
import PubForm from "./PubForm";
import Sidenav from "../Sidenav";

const Publications = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <PubForm />
        </div>
        
        </>
    );
}

export default Publications;