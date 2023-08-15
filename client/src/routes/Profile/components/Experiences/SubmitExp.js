import React from "react";
import AddExperiences from "../AddExperiences";
import DataDisplay from "./DataDisplay";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SubmitExp = () => {

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
        <DataDisplay />
        <div className="profile-component-container-all">
        <AddExperiences />
        </div>
        
        
        </>
    );
}

export default SubmitExp;