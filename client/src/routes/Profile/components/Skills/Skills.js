import React from "react";
import SkillInput from "./SkillsInput";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Skills = () => {

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
        <SkillInput />
        </div>
        
        </>
    );
}

export default Skills;