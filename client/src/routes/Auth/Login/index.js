import "./components/Login.css";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState("Continue");

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
      fetch("/user/login", {
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
          if (!data.success) {
            toast.error(data.msg);
            setLoader("LOG IN");
            return;
          }

          // Store the token in local storage
          localStorage.setItem("token", data.token);
          localStorage.setItem("progress", data.completionStatus);
          localStorage.setItem("userType", "user");

          // Store the user data in local storage
          localStorage.setItem("user", JSON.stringify(data.user));

          setFormData(initialFormData);
          setLoader("LOG IN");
          navigate("/personal-information");
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
    navigate("/signUp");
  }

  function forgetPasswordPage() {
    navigate("/forgetPassword");
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
      <div>
        <div className="container Card col-lg-4 pt-2">
          <div className="signupsignin d-flex">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              <h3 className="signUp" style={{ color: "#fff" }}>
                SIGN UP
              </h3>
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              <h3 className="signIn px-2" style={{ color: "#fff" }}>
                LOG IN
              </h3>
            </div>
          </div>
          {/* <div class="note pb-3">
            <span className="loginHeading mt-0 ">Apply for Jobs</span>
            {/* <div className="pt-3">
              <button className="LoginBtn mx-2" onClick={handle1}>
                Hire a Team
              </button>
              <button className="LoginBtn mx-2" onClick={handle2}>
                Apply for Jobs
              </button>
            </div> 
          </div> */}
          <div>
            <div class="col-sm-10 p-2 mx-auto">
              <div className="text-center mt-5 form-group">
                <Form onSubmit={handleSubmit}>
                  <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <label
                        className="form-label d-flex justify-content-start  mt-1"
                        htmlFor="form3Example3"
                        style={{
                          fontWeight: "600",
                          color: "#000",
                        }}
                      >
                        Continue With Email
                      </label>
                      <Form.Control
                        className="form-control loginInput "
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        style={{ borderRadius: "10px" }}
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
                            borderRadius: "10px",
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

                  <div className="d-flex justify-content-start mt-1">
                    <p className="rememberMe">
                      {/* <input type="checkbox" /> Remember Me */}
                    </p>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#1E1EF0",
                        fontSize: "15px",
                        fontFamily: "Poppins",
                      }}
                      onClick={forgetPasswordPage}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button type="submit" className="loginBtn mb-3 ml-2 mt-2">
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
                <div className="accountLink ">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#1E1EF0",
                      fontSize: "15px",
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

export default Login;
