import React from "react";
import ExpForm from "./ExpForm";
import Sidenav from "../Sidenav";

const Experiences = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <ExpForm />
        </div>
        
        </>
    );
}

export default Experiences;