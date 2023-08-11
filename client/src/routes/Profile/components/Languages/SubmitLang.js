import React from "react";
import AddLanguages from "./AddLanguages";
import DisplayLang from "./DisplayLanguages";
import Sidenav from "../Sidenav";
import { useNavigate } from "react-router-dom";
const SubmitLang = () => {

    const navigate = useNavigate();
    const currProgress = localStorage.getItem('progress');
    const progress = parseInt(currProgress, 10);
    const handleSubmit = () =>{
        navigate("/jobfeed");
    }
    return(
        <>
        <Sidenav />
        <DisplayLang />
        <div className="profile-component-container-all">
        <AddLanguages />
        {progress >= 75 && (
                    <div className="button-apply-jobs">
                        <button onClick={handleSubmit}>Apply For Jobs</button> 
                    </div>
        )}
        </div>
        
        </>
    );
}

export default SubmitLang;