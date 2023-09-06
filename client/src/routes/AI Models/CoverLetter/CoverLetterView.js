import React, { useEffect, useState } from "react";
import "./CoverLetterView.css";
import { Form, Link } from "react-router-dom";
import { useContext } from "react";
import { useLetterContext } from "../CoverLetterContext";
import Header from "../../Home/components/header";

export const CoverLetterView = () => {
  const { letter } = useLetterContext();

  return (
    <>
      <Header active="cover" />
      <div className="cover-letter-main-container11">
        <div className="cover-letter-heading-container">
          <h1 className="cover-letter-heading">Build Your Cover Letter</h1>
        </div>
        <div className="cover-letter-contact-container">
          <h3 className="cover-letter-contact-question">
            What&apos;s the best way for employers to contact you?
          </h3>
          <p className="cover-letter-contact-para">
            We suggest including an Email and Phone Number.
          </p>
        </div>
        <div className="cover-letter-info-container ">
          <h1 className="cover-sample-heading111">Cover Letter Sample</h1>
          <div className="headings-2">
            {/* <h2 className="To-h">To</h2>
          <h2 className="To-h">Company.Name</h2>
          <h2 className="To-h">Company.Addressi</h2>
          <h3 className="To-h2">Sub: Application for the post of assitant </h3>
          <h2 className="dearsir">Dear Sir</h2> */}
            <p className="para-cover-letter">
              <p>{letter}</p>
            </p>
            {/* <div className="endd">
            <h2 className="yf-end">Yours FaithFully,</h2>
            <h2 className="yf-end">Jonny Uncle</h2>
          </div> */}
            {/* <div className="lstt">
            <h2 className="lst-h">Enclosed:</h2>
            <ol>
              <li className="lst-h">
                <h4 className="lst-h">Two Copies of passport</h4>
              </li>
              <li className="lst-h">
                <h4 className="lst-h">Two Copies of passport</h4>
              </li>
              <li className="lst-h">
                <h4 className="lst-h">Two Copies of passport</h4>
              </li>
              <li className="lst-h">
                <h4 className="lst-h">Two Copies of passport</h4>
              </li>
            </ol>
          </div> */}
          </div>
        </div>
        <div className="buttons-containerss111">
          {/* <div className="cover-letter-view-template-button111">
          <Link to="/coverbuilder">
            <button className="cover-letter-back-button11">
              Change template
            </button>
          </Link>
        </div> */}
        </div>
        <div className="buttons-containerss1">
          <div className="custom-cover-letter-button-container">
            <Link to="/coverletterform">
              <button className="cover-letter-back-button">BACK</button>
            </Link>
            <Link to="/careercoach">
              <button className="cover-letter-next-button">SUBMIT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
