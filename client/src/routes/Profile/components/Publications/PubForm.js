import React from 'react';
import "../Experiences/ExpForm.css";
import { Link } from 'react-router-dom';


const PubForm = () => {

    

    return (
        <div className="form-container-exp">
          <div className="shadow-exp">
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="pub-title">
                Publication Title
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="pub-title"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="name-container-exp">
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="pub-by">
                  Published By
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="pub-by"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
              <div className="input-group-exp">
                <label className="label-exp" htmlFor="pub-url">
                  Publication URL
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="link"
                  id="pub-url"
                  className="input-field-exp"
                  placeholder=""
                />
              </div>
            </div>
            <div className="input-group-exp-1">
                <label className="label-exp" htmlFor="pub-date">
                    Published Date
                    <span className="required-exp">*</span>
                </label>
                    <input
                    type="date"
                    id="pub-date"
                    className="input-field-exp"
                    placeholder="DD-MM-YYYY"
                    />
              </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="research-area">
                Research Area
                <span className="required-exp">*</span>
              </label>
              <input
                type="text"
                id="research-area"
                className="input-field-exp"
                placeholder=""
              />
            </div>
            <div className="email-container-exp">
              <label className="label-exp" htmlFor="members">
                Members
               
              </label>
              <input
                type="text"
                id="members"
                className="input-field-exp"
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
            <Link to="/publications/submitted"> <button>Submit</button> </Link>
            </div>
          </div>
        </div>
      );
  };
  
  export default PubForm;