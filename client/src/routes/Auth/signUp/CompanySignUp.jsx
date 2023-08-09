import "../Login/components/Login.css";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function CompanySignUp() {
  const navigate = useNavigate();

  function loginButton() {
    navigate("/loginAsCompany");
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [loader, setLoader] = useState("SIGN UP");
  console.log("===password", isValidPassword);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // User Registration

  const [message, setMessage] = useState("");

  const UserRegister = () => {
    return "/loginAsCompany";
  };
  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      // Regex pattern for password validation
      const regexPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      const isValid = regexPattern.test(value);
      console.log("===", isValid);
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Update the validity of the password
      setIsValidPassword(isValid);
    } else {
      // For other fields, update the state without validation
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const { email, password, confirmPassword } = formData;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Please enter all fields");
    }
    // else if (!isValidPassword) {
    //   toast.error(
    //     "password should be one letter, one digit, and is at least 8 characters "
    //   );
    // }
    else {
      setLoader("SIGNING UP...");
      fetch("/company/register ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((data) => data.json())
        .then((response) => {
          console.log(response);
          if (!response.success) {
            toast.error(response.msg);
            setLoader("SIGN IN");
            return;
          }

          setFormData(initialFormData);
          setIsValidPassword(false);
          toast.success("User is registered successfully");
          setLoader("SIGN UP");
        })
        .catch((error) => {
          // Handle error here
          toast.error("Backend Error Occured");
          setLoader("SIGN UP");
          console.log("Error sending data:", error);
        });
    }
  };

  return (
    <>
      <div>
        <div className="backgroundIMAGE">
          <h2 className="topHeadingOfAuth">TAKE YOUR HIRING TO NEW HEIGHTS</h2>
        </div>
        <div className="container loginBox Card col-md-4 pt-2">
          <div className="signupsignin">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
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
                  fill="#6D0E9D"
                />
              </svg>
              <h3 className="signUp" style={{ color: "#fff" }}>
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
                  fill="#F5F7FA"
                />
              </svg>
              <h3 className="signIn" style={{ color: "#6d0e9d" }}>
                LOG IN
              </h3>
            </div>
          </div>
          <div className="note pt-0 pb-3">
            <span className="loginHeading ">Hire for Jobs</span>
          </div>

          <div>
            <div class="col-sm-10 p-2 mx-auto">
              <div class="text-center">
                <Form onSubmit={handleSubmit}>
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="form-control loginInput"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email"
                    />
                  </Form.Group>
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
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                  >
                    <InputGroup>
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
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
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "17px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={handleToggleConfirmPassword}
                        >
                          {showConfirmPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </InputGroup>
                  </Form.Group>
                  {formData.confirmPassword !== formData.password && (
                    <Form.Text className="text-danger">
                      Passwords do not match.
                    </Form.Text>
                  )}
                  <button
                    type="submit"
                    className="loginBtn mb-3"
                    onClick={UserRegister}
                  >
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
                        <span>Google</span>
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
                <div className="accountLink pt-3">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={loginButton}
                    style={{
                      textDecoration: "none",
                      color: "#6D0E9D",
                      fontSize: "14px",
                    }}
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default CompanySignUp;
