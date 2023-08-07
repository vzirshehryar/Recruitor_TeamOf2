import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";
import JobNav from "../../jobFeed/components/JobNav";

function Header() {
  const navigate = useNavigate();
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  function loginButton() {
    navigate("/Login");
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

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "center" }}
          >
            {!user ? (
              <>
                <Nav className="navBarLinks">
                  <Nav.Link className="mx-2" href="#home" active>
                    Home
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#whyus">
                    Why Us
                  </Nav.Link>
                </Nav>
                <button className="getHiredBtnH" onClick={loginButton}>
                  Get Hired
                </button>
              </>
            ) : (
              <Nav className="navBarLinks me-3">
                {/* <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <input value={searchKeyword} onChange={handleSearch}  type="text" placeholder="Search..." style={{ paddingLeft:'5%', border:'none', outline:'none', borderRadius:' 20px 0 0 20px ', justifyContent:'center', alignItems:'center', marginBottom:'2%', marginTop:'2%'}} />
                    <i style={{background:'white', borderRadius:'0 20px 20px 0', padding:'1px', paddingRight:'10px', color:'gray'}} className="ri-search-line"></i>
                    </div>*/}
                <div>
                  <Dropdown
                    drop="left"
                    align="end"
                    show={isDropdownOpen}
                    onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
                  >
                    <div className="account_icon">
                      <i
                        style={{
                          fontWeight: "100",
                          fontSize: "33px",
                          cursor: "pointer",
                        }}
                        className="ri-account-circle-line"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      ></i>
                    </div>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        style={{
                          textAlign: "center",
                          borderBottom: "1px solid black",
                        }}
                      >
                        <i
                          className="ri-account-box-fill"
                          style={{ marginRight: "2%" }}
                        ></i>
                        {user && data.email}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={handleLogout}
                        style={{ textAlign: "center" }}
                      >
                        <i
                          className="ri-logout-box-r-line"
                          style={{ marginRight: "2%" }}
                        ></i>
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
