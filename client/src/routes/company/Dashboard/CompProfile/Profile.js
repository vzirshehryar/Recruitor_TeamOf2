import React from "react";
import CompProfile from "./CompProfile";
import Sidebar from "../../Sidebar";

const Profile = () =>{

    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container">
            <CompProfile />
        </div>
        </>
    );
}

export default Profile;