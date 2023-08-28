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
    </div>
  );
};

export default Home;
