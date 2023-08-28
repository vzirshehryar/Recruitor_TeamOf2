import React from "react";
import style1 from "./components/JobStep.modules.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import carbon from "../../../assests/images/carbon.png";
import { AiOutlineLike } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { BiEuro } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import like from "../../../assests/images/like.svg";
function DetailPage() {
  return (
    <div className=" d-flex justify-content-center p-3 ">
      <div className={`container dpage m-0   p-5 Card col-lg-3 pt-2 `}>
        <div className="d-flex mt-5 justify-content-around">
          <div className="">
            <h1 className="dhead ">Account Administrator</h1>
            <p className="phead">Posted 3 days ago by Carbon 60 Easy Apply</p>
            <div className="dloc">
              <div className="d-flex row p-1 ml-1 row justify-content-around mt-1">
                <p className="dl col">
                  {" "}
                  <BiEuro />
                  £12.90 per hour
                </p>
                <p className="dl col">
                  {" "}
                  <BsBriefcase />
                  Contract, full-time
                </p>
              </div>
              <div className="d-flex row justify-content-around mt-1">
                <p className="col ml-2 dl mt-1 ">
                  <GrLocation />
                  Swisterland
                </p>
                {/* <p className="dl "> job</p> */}
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 mb-2">
              <AiOutlineLike className="likbtn" />
              <BsShare />
            </div>

            <div className="dbox d-flex  mt-5 flex-column ">
              <img src={carbon} className="carbon" alt="" />
              <hr className=" dhr p-0 m-0" />
              <a className="aphe p-0 h-0" href="">
                Apply here
              </a>
            </div>
          </div>
        </div>

        <div className="dlli">
          <ul className="dli   lh-lg ">
            <li className="">
              Manage of your own dedicated portfolio and the main contact for
              that portfolio
            </li>
            <li>Other general admin duties required.</li>
          </ul>
        </div>
        <div>
          <h2 className="dheadli">THE SUCCESSFUL CANDIDATE</h2>
          <ul className="dli mt-4  lh-lg">
            <li>Ability to work on your own initiative.</li>
            <li>Organised</li>
            <li>Previous experience in admin roles involving invoicing.</li>
            <li>Customer and quality focused</li>
            <li>
              Inquisitive, decisive, and able to see tasks through to
              completion.
            </li>
            <li>Knowledge of Utilities</li>
          </ul>
          <p className="dlp">
            If you would like to grow your experience joining a company that
            aspires to develop every employee to reach their full potential
            contact Bert at or send CV via application
          </p>
        </div>
        <button className="dbtn d-flex justify-content-center align-items-center text-center">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
