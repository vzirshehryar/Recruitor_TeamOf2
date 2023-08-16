import React from "react";
import ExpForm from "./ExpForm";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Experiences = () => {

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
        <ExpForm />
        </div>
        
        </>
    );
}

export default Experiences;