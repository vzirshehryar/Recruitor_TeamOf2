import React, { useState } from "react";
import "./CoverLetterForm.css";
import { Link } from "react-router-dom";
import Header from "../../Home/components/header";

export const CoverLetterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    address: "",
    companyName: "",
    hiringManager: "",
    letterDetails: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
    try {
      const response = await fetch("http://localhost:5000/cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    //this funciton is running, but I'm unable to edit my inputs
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <>
      <Header active="cover" />
      <div className="cover-letter-main-container">
        <div className="cover-letter-heading-container">
          <h1 className="cover-letter-heading">Build Your Cover Letter</h1>
        </div>
        <div className="cover-letter-contact-container">
          <h2 className="cover-letter-contact-question">
            What's the best way for employers to contact you?
          </h2>
          <h2 className="cover-letter-contact-question2">
            We suggest including an Email and Phone Number
          </h2>
        </div>

        <div className="cover-letter-info-container">
          <form action="" className="cover-letter-form" onSubmit={handleSubmit}>
            <div className="cover-letter-form-div">
              <div className="heading-size">Personal Details</div>
              <div>
                <label htmlFor="">Fullname</label>
                <input
                  id="name"
                  type="text"
                  value={formData?.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="">Job Title</label>
                <input
                  id="jobTitle"
                  type="text"
                  value={formData?.jobTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  id="email"
                  type="text"
                  value={formData?.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="">Address</label>
                <input
                  id="address"
                  type="text"
                  value={formData?.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="cover-letter-form-div">
              <div className="cover-letter-form-section-heading heading-size">
                <h4 class>Employer Details</h4>
              </div>
              <div>
                <label htmlFor="">Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  value={formData?.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="">Hiring Manager Name</label>
                <input
                  id="hiringManager"
                  type="text"
                  value={formData?.hiringManager}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="cover-letter-form-div">
              <div className="cover-letter-form-section-heading heading-size">
                <h4>Letter Details</h4>
              </div>
              <div>
                <label htmlFor="">
                  3–4 paragraphs explaining why you're the perfect candidate for
                  a specific job.
                </label>
                <textarea
                  id="letterDetails"
                  cols="30"
                  rows="8"
                  placeholder="Text here..."
                  value={formData?.letterDetails}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="cover-letter-button-container">
              <Link to="/resume-final">
                <button className="cover-letter-back-button">Back</button>
              </Link>
              <Link to="/coverletterview">
                <button className="cover-letter-next-button">Next</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
