import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Style from "./SetProfile.module.css";
import Header from "../Home/components/header";

const SetProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
    zipCode: "",
    linkedInLink: "",
    twitterLink: "",
  });

  const handleData = () => {
    const userToken = localStorage.getItem("token");
    const headers = {
      Authorization: userToken,
    };
    const newUrl = "/user/personalInfo/getData";
    axios
      .get(newUrl, { headers })
      .then((getResponse) => {
        if (!getResponse.data) {
          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            address: "",
            country: "",
            city: "",
            zipCode: "",
            linkedInLink: "",
            twitterLink: "",
          });
        } else {
          setFormData({
            firstName: getResponse.data.firstName,
            lastName: getResponse.data.lastName,
            emailAddress: getResponse.data.email,
            phoneNumber: getResponse.data.phNo,
            address: getResponse.data.address,
            country: getResponse.data.country,
            city: getResponse.data.city,
            zipCode: getResponse.data.zipCode,
            linkedInLink: getResponse.data.linkednLink,
            twitterLink: getResponse.data.twitterLink,
          });
        }
      })
      .catch((getError) => {
        console.error(getError);
        // Handle error from the GET request
      });
  };
  useEffect(() => {
    handleData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phNo: formData.phoneNumber,
      address: formData.address,
      country: formData.country,
      city: formData.city,
      zipCode: formData.zipCode,
      linkednLink: formData.linkedInLink,
      twitterLink: formData.twitterLink,
    };

    const token = localStorage.getItem("token");
    const apiUrl = "/user/personalInfo/postData";

    const headers = {
      Authorization: token,
    };
    axios
      .post(apiUrl, formattedData, { headers })
      .then((response) => {
        localStorage.setItem("progress", "15");
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error sending data to the backend.");
      });
  };

  return (
    <>
      <Header page="" />
      <div className="form-container">
        <div style={{ width: "70%", minWidth: "350px" }}>
          <p className={`${Style.step}`}>Step 1</p>
        </div>
        <div className="shadow p-0" style={{ boxShadow: "none" }}>
          <div
            className="d-flex justify-content-between align-items-center p-3"
            style={{ borderBottom: "1px solid #CF1350" }}
          >
            <h3 className={`${Style.h3}`}>CV</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M29.3327 14.6654V5.33203H2.66602V26.6654H14.666"
                stroke="#008000"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M2.66602 12H29.3327"
                stroke="#008000"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M18.666 24.0013L21.3327 26.668L29.3327 18.668"
                stroke="#008000"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="px-3 py-4">
            <p className={`${Style.pBold}`}>Your Current CV</p>
            <p className={`${Style.p}`}>xyz.pdf</p>
          </div>
        </div>
        <div style={{ width: "70%", minWidth: "350px", marginTop: "40px" }}>
          <p className={`${Style.step}`}>Step 2</p>
        </div>
        <div className="shadow mb-5">
          <h3 className={`${Style.h3} mb-3`}>Complete your registration</h3>
          <p className={`${Style.p}`}>
            almost there... We require few more details which will be sent to
            the recruiter.
          </p>
          <p className={`${Style.p} mb-3`}>* indicates a required field</p>
          <form onSubmit={handleSubmit}>
            <div className="name-container">
              <div className="input-group-profile">
                <label className="label" htmlFor="firstName">
                  First Name
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input-field"
                  placeholder="Enter your first name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group-profile">
                <label className="label" htmlFor="lastName">
                  Last Name
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="input-field"
                  placeholder="Enter your last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="email-container">
              <label className="label" htmlFor="emailAddress">
                Email Address
                <span className="required">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                className="input-field"
                placeholder="dummyemail@gmail.com"
                required
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>

            <div className="phone-container">
              <label className="label" htmlFor="phoneNumber">
                Phone Number
                <span className="required">*</span>
              </label>
              <input
                type="phone"
                id="phoneNumber"
                className="input-field"
                placeholder="0000 0000000"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
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
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="new-name-container">
              <div className="input-group-profile">
                <label className="label" htmlFor="country">
                  Country
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  className="input-field"
                  placeholder="Country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group-profile">
                <label className="label" htmlFor="city">
                  City
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="input-field"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group-profile">
                <label className="label" htmlFor="zipCode">
                  Zip Code
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="input-field"
                  placeholder="Zip Code"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="linkedin-container">
              <label className="label" htmlFor="linkedInLink">
                LinkedIn Link
                <span className="required">*</span>
              </label>
              <input
                type="link"
                id="linkedInLink"
                className="input-field"
                placeholder="URL Link"
                required
                value={formData.linkedInLink}
                onChange={handleChange}
              />
            </div>

            <div className="linkedin-container">
              <label className="label" htmlFor="twitterLink">
                Twitter Link
              </label>
              <input
                type="link"
                id="twitterLink"
                className="input-field"
                placeholder="URL Link"
                value={formData.twitterLink}
                onChange={handleChange}
              />
            </div>

            <div className="button-container">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SetProfile;
