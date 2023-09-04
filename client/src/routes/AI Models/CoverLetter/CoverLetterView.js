import React from "react";
import "./CoverLetterView.css";
import { Link } from "react-router-dom";
import Header from "../../Home/components/header";

export const CoverLetterView = () => {
  return (
    <>
      <Header active="cover" />
      <div className="cover-letter-main-container">
        <div className="cover-letter-heading-container">
          <h1 className="cover-letter-heading">Build your cover letter</h1>
        </div>
        <div className="cover-letter-contact-container">
          <h3 className="cover-letter-contact-question">
            What&apos;s the best way for employers to contact you?
          </h3>
          <p className="cover-letter-contact-para">
            We suggest including an Email and Phone Number.
          </p>
        </div>
        <div className="cover-letter-info-container cover-letter-view">
          <h1 className="cover-sample-heading">Cover Letter Sample</h1>
          <div className="headings-2">
            <h2>To</h2>
            <h2>The principle</h2>
            <h2>The College</h2>
            <h2>The Dhaka</h2>
            <h3>Sub: Application for the post of assitant </h3>
            <h2>Dear sir</h2>
            <p className="para-cover-letter">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics,very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </p>
            <h2>Your FaithFUlly</h2>
            <h2>Jonny Uncle</h2>
            <h2>Enclosed:</h2>
            <ol>
              <li>
                <h4>Two Copies of passport</h4>
              </li>
              <li>
                <h4>Two Copies of passport</h4>
              </li>
              <li>
                <h4>Two Copies of passport</h4>
              </li>
              <li>
                <h4>Two Copies of passport</h4>
              </li>
            </ol>
          </div>
          {/*<img src={coverletterview} alt="" />*/}
          <div className="cover-letter-view-template-button">
            <Link to="/coverbuilder">
              <button className="cover-letter-back-button">
                Change template
              </button>
            </Link>
          </div>
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
