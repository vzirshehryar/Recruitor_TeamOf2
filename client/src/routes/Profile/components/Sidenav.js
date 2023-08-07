import React from 'react';
import "../components/personalinfo.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Sidenav = () => {

   
    
    const currProgress = localStorage.getItem('progress');
    console.log(currProgress);

  return (
    <div className="sidenav">
      <div className="profile-heading">Profile</div>
      <div className="sidenav-buttons">
        <NavLink to="/personal-information" activeClassName="active" className="sidenav-button">Personal Information</NavLink>
        <NavLink to="/experiences/submit-exp" activeClassName="active" className="sidenav-button">Experiences</NavLink>
        <NavLink to="/education/submit-edu" activeClassName="active" className="sidenav-button">Education</NavLink>
        <NavLink to="/courses/submit-cour" activeClassName="active" className="sidenav-button">Courses</NavLink>
        <NavLink to="/certifications/submit-cert" activeClassName="active" className="sidenav-button">Certifications</NavLink>
        <NavLink to="/awards/submit-awards" activeClassName="active" className="sidenav-button">Awards</NavLink>
        <NavLink to="/publications/submit-pub" activeClassName="active" className="sidenav-button">Publications</NavLink>
        <NavLink to="/languages/submit-lang" activeClassName="active" className="sidenav-button">Languages</NavLink>
        <NavLink to="/skills/submit-skills" activeClassName="active" className="sidenav-button">Skills</NavLink>
      </div>
      <div className="progress-circle">
        <div className="progress-container">
          <CircularProgressbar value={currProgress} text={`${currProgress}%`} />
        </div>
        {/* <div className="progress-ring">
            <div className="progress-fill" style={{ transform: `rotate(${percentageToDegrees(75)})` }}></div>
        </div> */}
        {/* <div className="percentage">75%</div> */}
      </div>
        
            
        
        <div className="user-icon">
          {/* Add your user icon here */}
        </div>
    </div>
  );
};

export default Sidenav;