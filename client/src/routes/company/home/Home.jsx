import React from "react";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import guyWithMic from "../../../assests/images/guy-with-microphone.png"

const styleH2 = {
  color: "#3E055B",
  fontFamily: "Poppins",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "1.44px",
  maxWidth: "500px",
  textAlign: "left",
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="company-home-main-container">
      <div className="company-home-hero-container">
        <div className="company-home-welcome-container">
          <h1 className="company-home-welcome-heading">
            Discover Your Dream Career
          </h1>
          <h3 className="company-home-welcome-para">Find Top Talent!</h3>
          <button className="company-home-action-button">Post Job</button>
        </div>
        <div className="company-home-welcome-image">
          <img src={guyWithMic} alt="" />
        </div>
      </div>
      <Container id="whyus" className="py-5 p-3 no-mwidth">
        <h1
          className="text-center whyUsMainHeading"
        >
          Our Approach
        </h1>
        <br></br>
        <Container className="whyUsSecondHeadingCont">
          <h2
            className="text-center whyUsSecondHeading"
            style={{ color: "#404145", maxWidth: "900px" }}
          >
            Experience the difference with our unparalleled recruitment
            solutions that connect talent with opportunity.
          </h2>
        </Container>
        <Container className="pt-5 pb-5 no-mwidth">
          <div className="d-flex justify-content-between flex-wrap text-center p-3 gap-3">
            <div className="whyUsContentCont">
              <h1 className="whyUsContHeader pt-2">Understand who you are</h1>
              <p className="whyUsContText pt-2">
                You tell us what your DNA is and we will match you with the
                right candidate.
              </p>
            </div>
            <div className="whyUsContentCont">
              <h1 className="whyUsContHeader pt-2">Identify your needs</h1>
              <p className="whyUsContText pt-2">
                What skills, but above all what qualities will make it possible
                to establish a harmonious and positive working environment
                between you and your future employee?
              </p>
            </div>
            <div className="whyUsContentCont">
              <h1 className="whyUsContHeader pt-2">
                Select the right candidates
              </h1>
              <p className="whyUsContText pt-2">
                Deside Recrutement favours quality over quantity. We will
                present you with the best and the most relevant candidates to
                match your requirement
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
