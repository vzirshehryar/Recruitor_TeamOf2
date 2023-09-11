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
import "./LoginAsCompany.css";

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
                    // console.log("==data", data);
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
                    // console.log(localStorage);
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
                <div className="container Card col-lg-4 mt-5 company-SignIn-parent-container">
                    <div className="company-signIn-button-register">
                        <button
                            className="signIn-navigate-company-SignIn"
                            onClick={() => navigate("/loginAsCompany")}
                        >
                            SignIn
                        </button>
                        <button
                            className="register-navigate-company-SignIn"
                            onClick={() => navigate("/registerAsCompany")}
                        >
                            Register
                        </button>
                    </div>
                    <div className="company-signup-LogIn-heading">
                        <div>Login</div>
                    </div>

                    <div>
                        <div class="col-sm-10 p-2 mx-auto">
                            <div className="register-with-email-heading-signIn">
                                <div>Continue with email</div>
                            </div>
                            <div className="text-center  form-group">
                                <Form onSubmit={handleSubmit}>
                                    <p>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Control
                                                className="email-Input-Company-SignIn"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                            />
                                        </Form.Group>
                                    </p>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <InputGroup>
                                            <Form.Control
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="pass-Input-Company-SignIn"
                                            />
                                            <div className="input-group-append">
                                                <span
                                                    className="input-group-text text-center"
                                                    style={{
                                                        cursor: "pointer",
                                                        border: "none",
                                                        backgroundColor:
                                                            "transparent",
                                                        position: "absolute",
                                                        top: "17px",
                                                        right: "0",
                                                        textAlign: "center",
                                                    }}
                                                    onClick={
                                                        handleTogglePassword
                                                    }
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

                                    <div className="  forgot-pass-SignIn-company">
                                        {/* <p className="rememberMe">
                                            { <input type="checkbox" /> Remember Me }
                                        </p> */}
                                        <a
                                            href="#"
                                            style={{
                                                textDecoration: "none",
                                                color: "#FF4848",
                                                fontSize: "14px",
                                                fontFamily: "Poppins",
                                                fontWeight: "bold",
                                            }}
                                            onClick={forgetPasswordPage}
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="signIn-button-register-company"
                                    >
                                        {loader}
                                    </button>
                                </Form>
                                <ToastContainer />
                                <div className="accountLink mt-3">
                                    Don't have an account?{" "}
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "",
                                            color: "#b90739",
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
