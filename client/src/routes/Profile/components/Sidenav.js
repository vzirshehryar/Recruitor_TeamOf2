import React from 'react';
import "../components/personalinfo";

import { NavLink } from 'react-router-dom';
const Sidenav = () => {

    function percentageToDegrees(percentage) {
        return (percentage / 100) * 180; // Fills half-circle for 100%
      }

  return (
    <div className="sidenav">
      <div className="profile-heading">Profile</div>
      <div className="sidenav-buttons">
        <NavLink to="/personal-information" activeClassName="active" className="sidenav-button">Personal Information</NavLink>
        <NavLink to="/experiences" activeClassName="active" className="sidenav-button">Experiences</NavLink>
        <NavLink to="/education" activeClassName="active" className="sidenav-button">Education</NavLink>
        <NavLink to="/courses" activeClassName="active" className="sidenav-button">Courses</NavLink>
        <NavLink to="/certifications" activeClassName="active" className="sidenav-button">Certifications</NavLink>
        <NavLink to="/awards" activeClassName="active" className="sidenav-button">Awards</NavLink>
        <NavLink to="/publications" activeClassName="active" className="sidenav-button">Publications</NavLink>
        <NavLink to="/languages" activeClassName="active" className="sidenav-button">Languages</NavLink>
        <NavLink to="/skills" activeClassName="active" className="sidenav-button">Skills</NavLink>
      </div>
      <div className="progress-circle">
        <div className="progress-ring">
            <div className="progress-fill" style={{ transform: `rotate(${percentageToDegrees(75)})` }}></div>
        </div>
        <div className="percentage">75%</div>
      </div>
        
            
        
        <div className="user-icon">
          {/* Add your user icon here */}
        </div>
    </div>
  );
};

export default Sidenav;