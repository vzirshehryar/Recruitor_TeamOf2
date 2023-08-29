import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Style from "../home.module.css";
import './home.css'
import { Button } from "react-bootstrap";

function BestPart() {
  return (
    <div className={`${Style.BestPart}`}>
    {/* <h5 className={`${Style.h5}`}>AI Services</h5> */}
      <div className="find-job">
        <div className="left-section">
          <div className="image-grid">
            <div className="row">
              <div className="image">
              <img src='' alt="image" />
              </div>
              <div className="image">
              <img src='' alt="image" />
              </div>
              <div className="image">
              <img src='' alt="image"  />
              </div>
            </div>
            <div className="row">
              <div className="image">
              <img src='' alt="image" />
              </div>
              <div className="image">
              <img src='' alt="image" />
              </div>
              <div className="image">
              <img src='' alt="image"  />
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h2 className="ai-h2">Find a job you'll love with the<br /> UK's #1 job site</h2>
          <p className="ai-p">Your next role could be with one of these leading companies.</p>
          <Button className="ai-btn">See All Companies</Button>
        </div>
      </div>
    </div>
  );
}

export default BestPart;
