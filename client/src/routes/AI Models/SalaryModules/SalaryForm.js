import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SalaryForm.css";
import Header from "../../Home/components/header";

const SalaryForm = () => {
  const [formData, setFormData] = useState({
    currentRole: "",
    experience: "",
    education: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Form data: ", formData);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        navigate(`/salarydisplay/${data[0]}`);
      } else {
        console.error("Error:", response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <Header active="salary" />
      <div className="salary-container">
        <div className="rectangle-salary">
          <h1 className="heading-salary">Salary Module</h1>
        </div>
        <div className="new-heading-salary-container">
          <h3 className="new-heading-salary">Calculate your salary</h3>
          <p className="new-heading-salary2">
            Get paid what you&apos;re worth in today&apos;s job market
          </p>
        </div>
        <div className="form-salary-container ">
          <form action="" className="salary-form " onSubmit={handleSubmit}>
            <div className="cover-letter-form-div">
              <div>
                <label htmlFor="currentRole" className="salary-form-label">
                  Current Role
                </label>
                <input
                  id="currentRole"
                  className="salary-form-input"
                  type="text"
                  placeholder="Enter your current role"
                  required
                  value={formData?.currentRole}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="experience" className="salary-form-label">
                  Experience
                </label>
                <input
                  className="salary-form-input"
                  id="experience"
                  type="text"
                  placeholder="Enter your experience"
                  value={formData?.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="education" className="salary-form-label">
                  Education
                </label>
                <input
                  className="salary-form-input"
                  id="education"
                  type="text"
                  placeholder="Enter your education"
                  value={formData?.education}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="salary-form-label">
                  Country
                </label>
                <input
                  className="salary-form-input"
                  id="country"
                  type="text"
                  placeholder="Enter your country"
                  value={formData?.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div
              className="button-field-salary"
              style={{
                flexDirection: "column",
              }}
            >
              <Link to="">
                <button
                  type="submit"
                  className="submit-button-salar"
                  style={{
                    alignSelf: "flex-end",
                  }}
                  onClick={handleSubmit}
                >
                  {loading ? "loading..." : "NEXT"}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SalaryForm;
