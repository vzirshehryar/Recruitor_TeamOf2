import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import "./home.css";

function Header({ active, page }) {
  const navigate = useNavigate();
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  function loginButton() {
    navigate("/Login");
  }
  function signUpButton() {
    navigate("/signUp");
  }
  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearchKeyword(event.target.value);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const user = localStorage.getItem("user");
  const userType = localStorage.getItem("userType") === "user";
  let data = JSON.parse(user);

  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Define the userInfo state variable

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo); // Set the userInfo state variable
      if (parsedUserInfo.company) {
        setEmail(parsedUserInfo.company.comp_Email);
      } else if (parsedUserInfo.user) {
        setEmail(parsedUserInfo.user.user_Email);
      } else if (parsedUserInfo.admin) {
        setEmail(parsedUserInfo.admin.admin_Email);
      }
    }
  }, []);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
    },
    image: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
    name: {
      marginRight: "0px",
    },
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  if (page === "authPage") {
    return (
      <Navbar collapseOnSelect expand="lg" className="NavbarTop">
        <Container fluid className="px-5">
          <Navbar.Brand
            className="logoH"
            href="#home"
            onClick={() => navigate("/")}
          >
            Step200
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="NavbarTop">
        <Container fluid className="px-5">
          <Navbar.Brand
            className="logoH"
            href="#home"
            onClick={() => navigate("/")}
          >
            Step200
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ background: "white" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "space-between" }}
          >
            <Nav className="navBarLinks">
              <Link
                className={`mx-2 ${active === "job" ? "active" : ""}`}
                style={{ color: "white" }}
                to="/"
              >
                Jobs
              </Link>
              <Link
                className={`mx-2 ${active === "careerAdvise" ? "active" : ""}`}
                style={{ color: "white" }}
                to="/"
              >
                Career Advise
              </Link>
              <Link
                className={`mx-2 ${active === "company" ? "active" : ""}`}
                style={{ color: "white" }}
                to="/company"
              >
                Recruiting? Post A Job
              </Link>
            </Nav>
            {!user ? (
              <Nav>
                <button
                  className="getSignUpBtn"
                  style={{ background: "transparent" }}
                  onClick={signUpButton}
                >
                  Register CV
                </button>
                <button
                  className="getLogInBtn"
                  style={{ background: "transparent" }}
                  onClick={loginButton}
                >
                  Sign In
                </button>
              </Nav>
            ) : (
              <Nav className="navBarLinks me-3">
                <div>
                  <Dropdown
                    drop="left"
                    align="end"
                    show={isDropdownOpen}
                    onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
                  >
                    <div className="account_icon">
                      <FaUser
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          color: "white",
                        }}
                        // className="ri-account-circle-line"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                    </div>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        style={{
                          textAlign: "center",
                          borderBottom: "1px solid black",
                        }}
                        onClick={() => navigate("/personal-information")}
                      >
                        {/* <i
                          className="ri-account-box-fill"
                          style={{ marginRight: "2%" }}
                        ></i> */}
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={handleLogout}
                        style={{ textAlign: "center" }}
                      >
                        {/* <i
                          className="ri-logout-box-r-line"
                          style={{ marginRight: "2%" }}
                        ></i> */}
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
