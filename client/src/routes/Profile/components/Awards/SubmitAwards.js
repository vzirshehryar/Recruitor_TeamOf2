import React from "react";
import AddAwards from "./AddAwards";
import DisplayAwards from "./DisplayAwards";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SubmitAwards = () => {
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
        <DisplayAwards />
        <div className="profile-component-container-all">
        <AddAwards />
        </div>
        
        
        </>
    );
}

export default SubmitAwards;