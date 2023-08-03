import React from "react";
import SkillInput from "./SkillsInput";
import Sidenav from "../Sidenav";

const Skills = () => {
    return(
        <>
        <Sidenav />
        <div className="profile-component-container">
        <SkillInput />
        </div>
        
        </>
    );
}

export default Skills;