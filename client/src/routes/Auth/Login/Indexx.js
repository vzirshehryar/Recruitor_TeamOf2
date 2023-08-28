import img from "../../../assests/images/Rectangle-6475.png";
import { ReactComponent as Logo } from "../../../assests/images/Ellipse-38.svg";
import { ReactComponent as SMS } from "../../../assests/images/sms.svg";
import "./components/Login.css";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa/";

function Indexx() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom ">
          <div className="row d-flex gap-5 align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-5  p-0">
              <img
                src={img}
                className="img-fluid h-75 w-100"
                alt="Sample image"
              />
            </div>

            <div className="col-md-9 col-lg-6 col-xl-6 ">
              <form>
                <div className=" d-flex justify-content-center mb-6">
                  <Logo />
                </div>
                <h1 className="l-head m-0 p-0">hey, hello</h1>

                <p className="p-head mb-4">
                  enter the information you entered while registering.
                </p>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <SMS />
                    </span>
                  </div>
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-danger w-100 btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-center gap-5 ">
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <FaFacebook />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <FcGoogle />
                    </button>
                  </div>
                </div>
              </form>
              <p className="small fw-bold mt-2 pt-1 mb-0 ">
                Don't have an account?{" "}
                <a href="#!" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    //  </div>

    // <div className="d-flex">
    //   <div>
    //     <img src={img} alt=" Login Image" />
    //   </div>
    //   <div className="">
    //     <div className=" d-flex justify-content-center">
    //       <Logo />
    //     </div>
    //     <h1 className="l-head">hey, hello</h1>
    //     <p className="p-head">
    //       enter the information you entered while registering.
    //     </p>
    //     <div>
    //       <label htmlFor="Email">Email</label>
    //       <input type="email" />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input type="email" />
    //     </div>
    //     <div className="signupsignin">
    //       <div
    //         style={{ cursor: "pointer" }}
    //         onClick={() => navigate("/signup")}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="100%"
    //           height="80%"
    //           viewBox="0 0 342 111"
    //           fill="none"
    //         >
    //           <path
    //             d="M0 24C0 10.7452 10.7452 0 24 0H342V57.9757C342 70.3881 332.535 80.7526 320.174 81.877L0 111V24Z"
    //             fill="#F5F7FA"
    //           />
    //         </svg>
    //         <h3 className="signUp" style={{ color: "#6d0e9d" }}>
    //           SIGN UP
    //         </h3>
    //       </div>
    //       <div style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="100%"
    //           height="80%"
    //           viewBox="0 0 342 110"
    //           fill="none"
    //         >
    //           <path
    //             d="M0 0H318C331.255 0 342 10.7452 342 24V110L21.8454 81.1411C9.47562 80.0261 0 69.6579 0 57.238V0Z"
    //             fill="#6D0E9D"
    //           />
    //         </svg>
    //         <h3 className="signIn" style={{ color: "#fff" }}>
    //           LOG IN
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Indexx;
