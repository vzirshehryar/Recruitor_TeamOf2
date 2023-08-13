import React from 'react';
import Sidenav from '../components/Sidenav';
import Images from '../components/Images';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PersonalInformation = () => {
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
        <Images />
        </>
    );
}

export default PersonalInformation;