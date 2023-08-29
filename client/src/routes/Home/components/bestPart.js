import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Style from "../home.module.css";
import "./home.css";
import { Button } from "react-bootstrap";

function BestPart() {
  return (
    <div className={`${Style.BestPart}`}>
      <h5 className={`${Style.h5}`}>AI Services</h5>
    </div>
  );
}

export default BestPart;
