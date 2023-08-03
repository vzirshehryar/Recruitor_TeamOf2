import React from 'react';
import { Link } from 'react-router-dom';
import "../Experiences/ExpForm.css";



const CourForm = () => {

    

    return (
        <div className="form-container-cour">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="cour-name">
                Course Name
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="cour-name"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="institute-name">
                Institue Name
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="institute-name"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            
              
              <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="start-date">
                  Start Date
                  
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="end-date">
                  End Date
                  
                </label>
                <input
                  type="date"
                  id="end-date"
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
            <Link to="/courses/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default CourForm;