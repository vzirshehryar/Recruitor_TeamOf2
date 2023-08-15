import React from "react";
import AddSkills from "./AddSkills";
import DisplaySkills from "./DisplaySkills";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SubmitSkills = () => {

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
    const currProgress = localStorage.getItem('progress');
    const progress = parseInt(currProgress, 10);
    const handleSubmit = () =>{
        navigate("/jobfeed");
    }

    return(
        <>
        <Sidenav />
        <DisplaySkills />
        <div className="profile-component-container-all">
        <AddSkills />
        {progress >= 75 && (
                    <div className="button-apply-jobs">
                        <button onClick={handleSubmit}>Apply For Jobs</button> 
                    </div>
        )}
        </div>
        
        
        </>
    );
}

export default SubmitSkills;