import React from "react";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import img1 from "../../../assests/images/Why us img 1.PNG";
import img2 from "../../../assests/images/Why us img 2.PNG";
import img3 from "../../../assests/images/Why us img 3.PNG";
import Footer from "../../Home/components/footer";

const styleH2 = {
  color: "#3E055B",
  fontFamily: "Poppins",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "1.44px",
  maxWidth: "500px",
  textAlign: "left",
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar page="home" />

      <div className="backgroundDiv backgroudnDivImage px-5 pt-4" id="home">
        <h1 className="landingpageHeading" style={styleH2}>
          Find the next talented member of your team
        </h1>

        <p
          className="landingpageText"
          style={{ maxWidth: "800px", textAlign: "left" }}
        >
          Our mission is to simplify your recruitment and to ensure that the
          skills and values of your future recruits are in line with the
          expectations of your company.
        </p>

        <div className="">
          <button
            className="landingpageBtn mt-2"
            onClick={() => navigate("/postjobs")}
          >
            Post Job
          </button>
        </div>
      </div>
      <Container id="whyus" className="py-5 p-3">
        <h1
          className="text-center whyUsMainHeading"
          style={{ color: "#6D0E9D" }}
        >
          Our Approach
        </h1>
        <br></br>
        <Container className="whyUsSecondHeadingCont">
          <h2
            className="text-center whyUsSecondHeading"
            style={{ color: "#404145", maxWidth: "900px" }}
          >
            Experience the difference with our unparalleled recruitment
            solutions that connect talent with opportunity.
          </h2>
        </Container>
        <Container className="pt-5 pb-5">
          <div className="d-flex justify-content-between flex-wrap text-center p-3 gap-3">
            <div className="whyUsContentCont">
              <img className="whyUsImg" src={img1} />
              <h1 className="whyUsContHeader pt-2">Understand who you are</h1>
              <p className="whyUsContText pt-2">
                You tell us what your DNA is and we will match you with the
                right candidate.
              </p>
            </div>
            <div className="whyUsContentCont">
              <img className="whyUsImg" src={img2} />
              <h1 className="whyUsContHeader pt-2">Identify your needs</h1>
              <p className="whyUsContText pt-2">
                What skills, but above all what qualities will make it possible
                to establish a harmonious and positive working environment
                between you and your future employee?
              </p>
            </div>
            <div className="whyUsContentCont">
              <img className="whyUsImg" src={img3} />
              <h1 className="whyUsContHeader pt-2">
                Select the right candidates
              </h1>
              <p className="whyUsContText pt-2">
                Deside Recrutement favours quality over quantity. We will
                present you with the best and the most relevant candidates to
                match your requirement
              </p>
            </div>
          </div>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
