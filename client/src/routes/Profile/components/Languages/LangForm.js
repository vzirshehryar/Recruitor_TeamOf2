import React from 'react';
import { useState } from 'react';
import "../Experiences/ExpForm.css";
import { Link } from 'react-router-dom';


const LangForm = () => {

    

    return (
        <div className="form-container-cour">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="language">
                Language
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="language"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="name-container-exp">
                <div className="input-group-exp">
                    <label className="label-exp" htmlFor="speak-level">
                    Speaking Level
                    <span className="required-exp">*</span>
                    </label>
                    <select
                        className="input-field-exp"
                        required
                        >
                        <option value="">Select One</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Software">Intermediate</option>
                        <option value="Information Technology">Advanced</option>
                    </select>
                </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="list-level">
                  Listening Level
                  <span className="required-exp">*</span>
                </label>
                <select
                    className="input-field-exp"
                    required
                    >
                        <option value="">Select One</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Software">Intermediate</option>
                        <option value="Information Technology">Advanced</option>
                </select>
              </div>
            </div>
            <div className="name-container-exp">
                <div className="input-group-exp">
                    <label className="label-exp" htmlFor="write-level">
                    Writing Level
                    <span className="required-exp">*</span>
                    </label>
                    <select
                        className="input-field-exp"
                        required
                        >
                        <option value="">Select One</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Software">Intermediate</option>
                        <option value="Information Technology">Advanced</option>
                    </select>
                </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="read-level">
                  Reading Level
                  <span className="required-exp">*</span>
                </label>
                <select
                    className="input-field-exp"
                    required
                    >
                        <option value="">Select One</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Software">Intermediate</option>
                        <option value="Information Technology">Advanced</option>
                </select>
              </div>
            </div>
            
            
            <div className="button-container-exp">
            <Link to="/languages/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default LangForm;