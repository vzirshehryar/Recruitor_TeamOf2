import React from 'react';
import { useState } from 'react';
import "../Experiences/ExpForm.css";
import { Link } from 'react-router-dom';


const ExpForm = () => {

    const [toggle, setToggle] = useState(false); // State to manage the toggle button

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle); // Toggle the state when the button is clicked
    };

    return (
        <div className="form-container-exp">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="job-title">
                Job Title
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="job-title"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="employment-type">
                  Employment Type
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="emplyment-type"
                  className="input-field-exp"
                  placeholder="Select Employment Type"
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="industry">
                  Industry
                  <span className="required-exp">*</span>
                </label>
                <select
                    className="input-field-exp"
                    required
                    >
                    <option value="">Select One</option>
                    <option value="Software">Software</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Business Analytics">Business Analytics</option>
                    <option value="System Analyst">System Analyst</option>
                    <option value="Jr Quality Assurance Engineer">Jr Quality Assurance Engineer</option>
                    <option value="Application Support Analyst">Application Support Analyst</option>
                    <option value="Senior Backend Developer">Senior Backend Developer</option>
                    <option value=".net Developer">.net Developer</option>
                    <option value="Programmer">Programmer</option>
                    <option value="CEO">CEO</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="IT">IT</option>
                    <option value="Intern">Intern</option>
                    <option value="Graphic Designer And 2D Artist">Graphic Designer And 2D Artist</option>
                    <option value="Support Engineer">Support Engineer</option>
                    <option value="Jr. Android Developer">Jr. Android Developer</option>
                    <option value="Data Warehousing">Data Warehousing</option>
                    <option value="Data Analysis And mining engineer">Data Analysis And mining engineer</option>
                    <option value="QA Analyst">QA Analyst</option>
                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                    <option value="Oracle Developer">Oracle Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Design">Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Ecommerce">Ecommerce</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Telecommunications">Telecommunications</option>
                    
                </select>
              </div>
            </div>
            <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="start-date">
                  Start Date
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="input-field-exp"
                  placeholder="DD-MM-YYYY"
                />
              </div>
              <div className="input-group-exp">
                <label className="curr-work" htmlFor="industry">
                    Currently Working?
                    <span className="required-exp">*</span>
                </label>
                
                <label className="switch">
                    <input type="checkbox" checked={toggle} onChange={handleToggle} />
                    <span className="slider round"></span>
                </label>
                
               </div>
            </div>
            
              <div className="input-group-exp-1">
              <label className="label-exp" htmlFor="end-date">
                  End Date
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="input-field-exp"
                  placeholder="DD-MM-YYYY"
                />
              </div>
              
            
              <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="company">
                  Company
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="company-website">
                  Company Website
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="link"
                  id="company-website"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
            </div>
            <div className="new-name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="country">
                  Country
                  <span className="required-exp">*</span>
                </label>
                <select
                    className="input-field-exp"
                    required
                    >
                    <option value=""></option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="EU">UK</option>
                </select>
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="state">
                  State
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="city">
                  City
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
            </div>
            <div className="description-container-exp">
              <label className="label-exp" htmlFor="description">
                Description
                <span className="required-exp">*</span>
              </label>
              <input
                type="description"
                id="description"
                className="input-field-exp-1"
                placeholder=""
              />
            </div>
            
            <div className="button-container-exp">
            <Link to="/experiences/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default ExpForm;