import React from "react";
import CourForm from "./CourForm";
import Sidenav from "../Sidenav";

const Courses = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <CourForm />
        </div>
        
        </>
    );
}

export default Courses;