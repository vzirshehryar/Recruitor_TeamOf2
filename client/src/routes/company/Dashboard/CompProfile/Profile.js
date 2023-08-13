import React from "react";
import CompProfile from "./CompProfile";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () =>{

    const navigate = useNavigate();
    const handleAuth = () =>{
        const type = localStorage.getItem("userType");
        if (type !== "company")
        {
            navigate("/loginAsCompany");
        }
    }
    useEffect(() => {
        handleAuth();
      }, []);
    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container">
            <CompProfile />
            <Footer />
        </div>
        </>
    );
}

export default Profile;