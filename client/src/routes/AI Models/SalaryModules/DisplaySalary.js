import React from "react";
import "./SalaryForm.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../Home/components/header";

const DisplaySalary = () => {
  const params = useParams();
  const { salary } = params;
  console.log(salary);

  return (
    <>
      <Header active="salary" />
      <div className="salary-container">
        <div className="rectangle-salary">
          <h1 className="heading-salary">Salary Module</h1>
        </div>
        <div className="new-heading-salary-container">
          <h2 className="new-heading-salary3">
            User Interface / User Experience (UI / UX) Designer
            <br /> salary estimate in Pakistan.
          </h2>
        </div>
        <div className="form-salary-container">
          <div className="main-salary-image">
            <img src={"/Circle.png"} alt="circle" className="main-image" />
            <div className="small-image-container">
              <img src={"/wallet.png"} alt="wallet" className="small-image" />
              <div className="rs-container">
                <p className="rs-text">{salary}</p>
              </div>
            </div>
          </div>
          <p className="ai-generated-text">
            This is AI generated answer that can be up and down.
          </p>
        </div>
        {/* <div className="button-salary-container">
          <Link to="/candidate-infoform">
            <button
              type="submit"
              className="next-button-Salrry"
              style={{
                alignSelf: "flex-end",
                marginBottom: "40px",
              }}
            >
              Enter Candidate Information
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default DisplaySalary;
