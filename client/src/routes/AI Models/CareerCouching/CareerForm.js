import React, { useState } from "react";
import "./CareerForm.css";
import { Link } from "react-router-dom";
import Header from "../../Home/components/header";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    currentRole: "",
    skills: "",
    careerGoal: "",
    priority: "",
    interests: "",
    jobPreferences: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
    try {
      const response = await fetch("http://localhost:5000/career-advice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        setResult(data[0]);
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
      <Header active="career" />
      <div className="career-container1">
        <div className="rectangle-career1">
          <h1 className="heading-career1">Career Coach</h1>
        </div>
        <div className="new-heading-career-container1">
          <h2 className="new-heading-career1">
            Answer a few simple questions, and receive personalized advice to
            elevate your career to new heights.
          </h2>
        </div>
        <div className="form-career-container1">
          <form className="career-form1" onSubmit={handleSubmit}>
            <div className="career-form-field1">
              <label htmlFor="currentRole" className="career-form-label1">
                Current Role
              </label>
              <input
                type="text"
                id="currentRole"
                className="career-form-input1"
                placeholder="Enter your current role"
                required
                value={formData?.currentRole}
                onChange={handleInputChange}
              />
            </div>
            <div className="career-form-field1">
              <label htmlFor="skill" className="career-form-label1">
                Skill
              </label>
              <input
                type="text"
                id="skills"
                className="career-form-input1"
                placeholder="Enter Your Skill"
                required
                value={formData?.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="career-form-field1">
              <label htmlFor="careerGoal" className="career-form-label1">
                Career Goal
              </label>
              <textarea
                type="text"
                id="careerGoal"
                className="career-form-input23"
                placeholder="What is Your Career Goal?"
                rows="5"
                cols="33"
                required
                value={formData?.careerGoal}
                onChange={handleInputChange}
              />
            </div>
            <div className="career-form-field1">
              <label htmlFor="priority" className="career-form-label1">
                Seeking Priority
              </label>
              <textarea
                type="text"
                id="priority"
                className="career-form-input23"
                placeholder="What is The Most Important Thing You Are Looking For In A Job?"
                rows="5"
                cols="33"
                required
                value={formData?.priority}
                onChange={handleInputChange}
              />
            </div>
            <div className="career-form-field1">
              <label htmlFor="interests" className="career-form-label1">
                Interests
              </label>
              <textarea
                type="text"
                id="interests"
                className="career-form-input23"
                placeholder="What Are Your Interests?"
                rows="5"
                cols="33"
                required
                value={formData?.interests}
                onChange={handleInputChange}
              />
            </div>
            <div className="career-form-field12">
              <label htmlFor="jobPref" className="career-form-label1">
                Job Preferences
              </label>
              <textarea
                type="text"
                id="jobPrefrences"
                className="career-form-input23"
                placeholder="What Are Your Job Preferences?"
                rows="5"
                cols="33"
                required
                value={formData?.jobPrefrences}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-field12">
              <Link to="">
                <button
                  type="submit"
                  className="submit-button12"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
          <div className="career-form-field123"> 
          <textarea
            type="text"
            className="career-form-input23"
            placeholder="Your Result will show here"
            contentEditable={false}
            
            value={result}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
