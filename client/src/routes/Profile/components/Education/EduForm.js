import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Experiences/ExpForm.css";



const EduForm = () => {

    

    return (
        <div className="form-container-edu">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="school">
                School
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="school"
                className="input-field-exp"
                placeholder="Ex: Boston University"
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="degree">
                Degree
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="degree"
                className="input-field-exp"
                placeholder="Ex: Bachelor's"
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="field">
                Field Of Study
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="field"
                className="input-field-exp"
                placeholder="Ex: Bachelor's"
              />
            </div>
              
              <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="start-month">
                  Start Month
                  
                </label>
                <input
                  type="text"
                  id="start-month"
                  className="input-field-exp"
                  placeholder="Month"
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="year">
                  Year
                  
                </label>
                <input
                  type="text"
                  id="year"
                  className="input-field-exp"
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="end-month">
                  End Month
                  
                </label>
                <input
                  type="text"
                  id="end-month"
                  className="input-field-exp"
                  placeholder="Month"
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="end-year">
                  Year
                  
                </label>
                <input
                  type="text"
                  id="end-year"
                  className="input-field-exp"
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="grades">
                Grades
                
              </label>
              <input
                type="text"
                id="grades"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            
            <div className="description-container-exp">
              <label className="label-exp" htmlFor="act-societies">
                Activities And Societies
                
              </label>
              <input
                type="description"
                id="act-societies"
                className="input-field-exp-1"
                placeholder=""
              />
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
            <Link to="/education/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default EduForm;