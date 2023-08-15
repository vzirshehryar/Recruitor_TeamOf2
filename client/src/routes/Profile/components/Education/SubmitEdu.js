import React from "react";
import AddEducation from "./AddEducation";
import DisplayEdu from "./DisplayEducation";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SubmitEdu = () => {
    
    const navigate = useNavigate();
    const handleAuth = () =>{
        const type = localStorage.getItem("userType");
        if (type !== "user")
        {
            navigate("/login");
        }
    }
    useEffect(() => {
        handleAuth();
      }, []);
    return(
        <>
        <Sidenav />
        <DisplayEdu />
        <div className="profile-component-container-all">
        <AddEducation />
        </div>
        
        
        </>
    );
}

export default SubmitEdu;