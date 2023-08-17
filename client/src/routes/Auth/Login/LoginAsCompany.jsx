import "./components/Login.css";
import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../../company/Navbar";

function LoginAsCompany() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState("LOG IN");

  useEffect(() => {
    if (localStorage.getItem("userType") === "company") {
      navigate("/company");
    }
  }, []);

  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const { email, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoader("loading...");

    if (!email || !password) {
      toast.error("Please enter all fields");
    } else {
      fetch("/company/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          // if (!response.ok) {
          //   toast.error();
          //   return;
          // }
          return response.json(); // Parse the response JSON
        })
        .then((data) => {
          console.log("==data", data);
          if (!data.success) {
            toast.error(data.msg);
            setLoader("LOG IN");
            return;
          }

          // Store the token in local storage
          localStorage.setItem("token", data.token);
          localStorage.setItem("userType", "company");

          // Store the user data in local storage
          localStorage.setItem("user", JSON.stringify(data.user));

          setFormData(initialFormData);
          setLoader("LOG IN");
          navigate("/companydashboard");
          console.log(localStorage);
        })
        .catch((error) => {
          // Handle error here
          toast.error("Some error occured");

          console.log("Error sending data:", error);
          setLoader("LOG IN");
        });
    }
  };

  const google = () => {
    window.open("/auth/google", "_self");
  };

  function registerBtn() {
    navigate("/registerAsCompany");
  }

  function forgetPasswordPage() {
    navigate("/CforgetPassword");
  }

  // Company Login

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar page="authPage" />
      <div>
        <div className="backgroundIMAGE">
          <h2 className="topHeadingOfAuth">TAKE YOUR HIRING TO NEW HEIGHTS</h2>
        </div>
        <div className="container Card col-lg-4 pt-2">
          <div className="signupsignin">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/registerAsCompany")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="80%"
                viewBox="0 0 342 111"
                fill="none"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0H342V57.9757C342 70.3881 332.535 80.7526 320.174 81.877L0 111V24Z"
                  fill="#F5F7FA"
                />
              </svg>
              <h3 className="signUp" style={{ color: "#6d0e9d" }}>
                SIGN UP
              </h3>
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/loginAsCompany")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="80%"
                viewBox="0 0 342 110"
                fill="none"
              >
                <path
                  d="M0 0H318C331.255 0 342 10.7452 342 24V110L21.8454 81.1411C9.47562 80.0261 0 69.6579 0 57.238V0Z"
                  fill="#6D0E9D"
                />
              </svg>
              <h3 className="signIn" style={{ color: "#fff" }}>
                LOG IN
              </h3>
            </div>
          </div>
          <div class="note pb-3">
            <span className="loginHeading mt-0 ">Hire for Jobs</span>
            {/* <div className="pt-3">
              <button className="LoginBtn mx-2" onClick={handle1}>
                Hire a Team
              </button>
              <button className="LoginBtn mx-2" onClick={handle2}>
                Apply for Jobs
              </button>
            </div> */}
          </div>
          <div>
            <div class="col-sm-10 p-2 mx-auto">
              <div className="text-center  form-group">
                <Form onSubmit={handleSubmit}>
                  <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="form-control loginInput"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </Form.Group>
                  </p>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control loginInput"
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text text-center"
                          style={{
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "17px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-1">
                    <p className="rememberMe">
                      {/* <input type="checkbox" /> Remember Me */}
                    </p>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#6D0E9D",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                      onClick={forgetPasswordPage}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button type="submit" className="loginBtn mb-3 mt-2">
                    {loader}
                  </button>
                </Form>
                {/* <div className="text-with-lines py-3">
                  <div className="line"></div>
                  <span className="text">Or continue with</span>
                  <div className="line"></div>
                </div>
                <div className=" d-flex justify-content-center gap-3 ">
                  <div>
                    <button className="inputIcons">
                      <p className="icons">
                        {" "}
                        <FcGoogle fill="#3B5998" size={20} />
                        <span onClick={google}>Google</span>
                      </p>
                    </button>
                  </div>
                  <button className=" inputIcons  ">
                    <p className="icons ">
                      {" "}
                      <FaFacebook fill="#3B5998" size={20} />
                      <span>Facebook</span>{" "}
                    </p>
                  </button>
                </div> */}
                <ToastContainer />
                <div className="accountLink mt-3">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#6D0E9D",
                      fontSize: "14px",
                    }}
                    onClick={registerBtn}
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAsCompany;
