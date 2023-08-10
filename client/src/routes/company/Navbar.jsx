import React, { useState } from "react";
import { FaBars, FaGreaterThan, FaUser } from "react-icons/fa";

import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ page }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const authenticated =
    localStorage.getItem("token") &&
    localStorage.getItem("userType") === "company";

  if (page === "authPage")
    return (
      <div className={`${style.allCenter} ${style.companyNav}`}>
        <h2 onClick={() => navigate("/company")}>Step200</h2>
      </div>
    );

  if (!authenticated)
    return (
      <div className={style.companyNav}>
        <h2 onClick={() => navigate("/company")}>Step200</h2>
        <div
          className={`${style.allCenter} ${style.companyNavDiv}`}
          style={open ? { display: "flex" } : {}}
        >
          <div className={`${style.links} ${style.allCenter}`}>
            <Link to="#top">Home</Link>
            <Link to="#nothing yet">Recruitor</Link>
          </div>
          <div className={`${style.user} ${style.allCenter}`}>
            <button
              className={style.logIn}
              onClick={() => {
                navigate("/LoginAsCompany");
              }}
            >
              Log In
            </button>
            <button
              className={style.signUp}
              onClick={() => {
                navigate("/registerAsCompany");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <FaBars
          style={{ width: "35px", height: "35px" }}
          className={style.barIcon}
          onClick={() => setOpen(!open)}
        />
      </div>
    );

  const { email } = JSON.parse(localStorage.getItem("user"));
  if (authenticated)
    return (
      <div className={style.companyNav}>
        <h2 onClick={() => navigate("/company")}>Step200</h2>
        <div
          className={`${style.allCenter} ${style.cover}`}
          onClick={() => setOpen(!open)}
        >
          {/* <img
            src={"/background.png"}
            alt="profilePic"
            className={style.image}
          /> */}
          <FaUser style={{ width: 25, height: 25 }} />
          <p className="m-0">Xyz</p>
          <FaGreaterThan style={{ width: 12, height: 12 }} />
          <div
            className={`${style.logoutOption}`}
            style={open ? { display: "block" } : {}}
          >
            <p>{email}</p>
            <p
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userType");
                navigate("/company");
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
