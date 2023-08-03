import React from 'react';
import { Link } from 'react-router-dom';
import "../Experiences/ExpForm.css";



const CertForm = () => {

    

    return (
        <div className="form-container-cour">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="course-title">
                Course Title
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="course-title"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="organization">
                Organization
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="organization"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="issue-date">
                  Issue Date
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="date"
                  id="issue-date"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="expiry-date">
                  Expiry Date
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="date"
                  id="expiry-date"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
            </div>
                
              <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="cred-id">
                  Credential ID
                  
                </label>
                <input
                  type="text"
                  id="cred-id"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="cred-url">
                  Credential URL
                  
                </label>
                <input
                  type="link"
                  id="cred-url"
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
            <Link to="/certifications/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default CertForm;