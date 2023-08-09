import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const PostJobs = () => {

  
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      address: '',
      country: '',
      city: '',
      zipCode: '',
      linkedInLink: '',
      twitterLink: '',
    });
  
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
  
      console.log(formattedData);
  
      const token = localStorage.getItem('token');
      console.log(token);
      const apiUrl = '/user/personalInfo/postData';
  
      const headers = {
        Authorization: token,
      };
      axios.post(apiUrl, formattedData, { headers })
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error sending data to the backend.");
        });
    };
  
    return (
      <div className="form-container-postjobs">
        
        <div className="shadow2">
          <form onSubmit={handleSubmit}>
            <div className="postjobs-heading">Job Detail</div>
            <div className="name-container">
              <div className="input-group-profile">
                <label className="label" htmlFor="firstName">
                  Job Title
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input-field"
                  placeholder="Designer"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group-profile">
                <label className="label" htmlFor="lastName">
                  Job Type
                  <span className="required">*</span>
                </label>
                <select
                    id="speakingLevel"
                    className="input-field-exp"
                    required
                    value={formData.speakingLevel}
                    onChange={handleChange}
                >
                    <option value="">Select One</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
  
            <div className="email-container">
              <label className="label" htmlFor="emailAddress">
                Job Level
                <span className="required">*</span>
              </label>
              <select
                    id="speakingLevel"
                    className="input-field-exp"
                    required
                    value={formData.speakingLevel}
                    onChange={handleChange}
                >
                    <option value="">Select One</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
  
            <div className="name-container-exp">
                <div className="input-group-exp">
                  <label className="label-exp" htmlFor="publishedBy">
                    Salary Range
                    <span className="required-exp">*</span>
                  </label>
                  <input
                    type="text"
                    id="publishedBy"
                    className="input-field-exp"
                    placeholder="Min-0000"
                    required
                    value={formData.publishedBy}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group-exp">
                  <label className="label-exp" htmlFor="publicationURL">
                  &nbsp;
                  </label>
                  <input
                    type="url"
                    id="publicationURL"
                    className="input-field-exp"
                    placeholder="Max-000"
                    required
                    value={formData.publicationURL}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
            <div className="address-container">
              <label className="label" htmlFor="address">
                Location
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
  
            <div className="address-container">
              <label className="label" htmlFor="experience">
                Experience
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="experience"
                className="input-field"
                placeholder="Experience"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="address-container">
              <label className="label" htmlFor="qualifications">
                Qualifications
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="qualifications"
                className="input-field"
                placeholder="Qualification"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
  
            <div className="linkedin-container">
              <label className="label" htmlFor="applicationDeadline">
                Application Deadline
                <span className="required">*</span>
              </label>
              <input
                type="date"
                id="applicationDeadline"
                className="input-field"
                placeholder="mm/dd/yyyy"
                required
                value={formData.linkedInLink}
                onChange={handleChange}
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
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
  
            <div className="button-container">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  };
  
  export default PostJobs;