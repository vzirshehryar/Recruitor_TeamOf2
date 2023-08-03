import React from 'react';
import "../components/personalinfo.css";
import { Button } from 'react-bootstrap';


const PersonalInfo = () => {
    return (
        <div className="form-container">
          <div className="shadow">
            <div className="name-container">
              <div className="input-group">
                <label className="label" htmlFor="first-name">
                  First Name
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="input-field"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="input-group">
                <label className="label" htmlFor="last-name">
                  Last Name
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="input-field"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="email-container">
              <label className="label" htmlFor="email-address">
                Email Address
                <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email-address"
                className="input-field"
                placeholder="dummyemail@gmail.com"
              />
            </div>
            <div className="phone-container">
              <label className="label" htmlFor="phone-number">
                Phone Number
                <span className="required">*</span>
              </label>
              <input
                type="phone"
                id="phone-number"
                className="input-field"
                placeholder="0000 0000000"
              />
            </div>
            <div className="address-container">
              <label className="label" htmlFor="address">
                Address
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="address"
                className="input-field"
                placeholder="house # 00 street # 00 Phase 0 Dummy Town"
              />
            </div>
            <div className="new-name-container">
              <div className="input-group">
                <label className="label" htmlFor="country">
                  Country
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  className="input-field"
                  placeholder="Country"
                />
              </div>
              <div className="input-group">
                <label className="label" htmlFor="city">
                  City
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="input-field"
                  placeholder="City"
                />
              </div>
              <div className="input-group">
                <label className="label" htmlFor="area-code">
                  Zip Code
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="area-code"
                  className="input-field"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="linkedin-container">
              <label className="label" htmlFor="link">
                LinkedIn Link
                <span className="required">*</span>
              </label>
              <input
                type="link"
                id="link"
                className="input-field"
                placeholder="URL Link"
              />
            </div>
            <div className="linkedin-container">
              <label className="label" htmlFor="link">
                Twitter Link
                
              </label>
              <input
                type="link"
                id="link"
                className="input-field"
                placeholder="URL Link"
              />
            </div>
            <div className="button-container">
                <button>Save</button>
            </div>
          </div>
        </div>
      );
  };
  
  export default PersonalInfo;