import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../Experiences/ExpForm.css";



const AwardsForm = () => {

    const fileInputRef = useRef(null);
    const handleChooseFile = () => {
        fileInputRef.current.click();
      };

    return (
        <div className="form-container-cour">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="award-title">
                Award Title
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="award-title"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="issued-by">
                Issued by (Company / Institue)
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="issued-by"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            
              <div className="input-group-exp-1">
                <label className="label-exp" htmlFor="issue-date">
                    Issue Date
                    <span className="required-exp">*</span>
                </label>
                    <input
                    type="date"
                    id="issue-date"
                    className="input-field-exp"
                    placeholder="DD-MM-YYYY"
                    />
              </div>
              <div className="input-group-exp-1">
                <label htmlFor="award-image" className="label-exp">
                    Award Image
                    <span className="required-exp">*</span>
                </label>
                <div className="file-input-wrapper">
                    <button className="custom-file-button" onClick={handleChooseFile}>Choose Image</button>
                    <input
                    type="file"
                    id="award-image"
                    className="input-field-awards"
                    ref={fileInputRef}
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
            <Link to="/awards/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default AwardsForm;