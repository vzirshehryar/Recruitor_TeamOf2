import React, { useState } from "react";
import "./CareerForm.css";
import { Link } from "react-router-dom";
import Header from "../../Home/components/header";

const CareerPath = () => {
  const [formData, setFormData] = useState({
    priority: "",
    interests: "",
    jobPrefrences: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
    try {
      const response = await fetch("http://localhost:5000/career-path", {
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
      <Header active="path" />
      <div className="career-container1">
        <div className="rectangle-career1">
          <h1 className="heading-career1">Career Path</h1>
        </div>
        <div className="new-heading-career-container1">
          <h2 className="new-heading-career1">
            Answer a few simple questions, and the right path to the Career you
            like
          </h2>
        </div>
        <div className="form-career-container1">
          <form className="career-form1" onSubmit={handleSubmit}>
            <div className="career-form-field1">
              <label htmlFor="priority" className="career-form-label1">
                Seeking Priority
              </label>
              <textarea
                type="text"
                id="priority"
                className="career-form-input2"
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
                className="career-form-input2"
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
                className="career-form-input2"
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

export default CareerPath;
