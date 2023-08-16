import React from "react";
import EduForm from "./EduForm";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Education = () => {

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
        <div className="profile-component-container-multi">
        <EduForm />
        </div>
        
        </>
    );
}

export default Education;