import { React, useEffect, useState } from "react";
import style1 from "./components/JobStep.modules.css";

import carbon from "../../../assests/images/carbon.png";
import { AiOutlineLike } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

import { BiEuro } from "react-icons/bi";

import Header from "../../Home/components/header";
import JobNav from "../components/JobNav";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailPage() {
  const [jobData, setJobData] = useState({});
  const { jobId } = useParams(); // Extract jobId from URL params
  const apiEndpoint = `http://localhost:4000/job/getJob/${jobId}`;

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setJobData(data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, [apiEndpoint]);

  return (
    <>
      <Header />
      <JobNav />
      <div className=" d-flex justify-content-center p-3 ">
        <div className={`container dpage m-0    Card col-lg-3  `}>
          <div>
            <div className=" bgimg ">
              <div className="dbox d-flex row m-auto   justify-content-center  ">
                <img
                  src={carbon}
                  className="carbon d-flex text-center justify-content-center mt-5"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="ml-5 dp d-flex justify-content-start ">
                <p className="dheading   ">Featured</p>
              </div>
              <div>
                <Container className="Card  dcard ">
                  <Row>
                    <Col className=" " md={{ span: 6, offset: 4 }}>
                      <div>
                        <h1 className="dhead  m-0 p-0">
                          Graphic Designer{jobData.jobTitle}
                        </h1>
                        <p className="phead   m-0 p-0">
                          Posted 3 days ago by Carbon 60 Easy Apply
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div className="  gap-3 " md={{ span: 3, offset: 3 }}>
                        <AiOutlineLike className="" />
                        <BsShare />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="dloc ">
                        <div className="d-flex  grid text-center gap-4  justify-content-center ">
                          <p className="dl p-2">
                            <BiEuro />
                            £12.90 per hour
                          </p>
                          <p className="dl p-2 ">Contract, full-time</p>
                          <p className=" p-2 dl ">Swisterland</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="dpad">
                <h2 className="dheading mt-5 ">
                  {" "}
                  Graphic Designer, Oldbury, £25-27k
                </h2>
                <p className="phead mt-4 ">
                  I am currently working with a warm and friendly company, who
                  due to increased work are now seeking an additional Graphic
                  Designer to bring fresh ideas and concepts to fit both Print
                  and Digital briefs.Based at company’s Head Office in Oldbury
                  this is initially a 3-month full time contract, however there
                  is the possibility it could develop into a permanent position.
                </p>
                <h2 className="dheading dpad ">Overview:</h2>
                <ul className="dli lh-lg  mt-4">
                  <li className="">
                    Working closely with the In-House Team and Directors as well
                    as an external Creative Agency, to expand and execute
                    marketing and promotional plans
                  </li>
                  <li>
                    Creating Brochures, Leaflets, POS Materials, and Display Ads
                    etc.
                  </li>
                  <li>
                    Collaborate with various levels of personnel in the
                    business, while bringing your expertise in graphic and
                    strong visual design.
                  </li>
                  <li>
                    Design and develop digital content/graphics across channels
                    including Social Media, Digital Advertisements, Website and
                    Email, this will include Videos, Animations and manipulating
                    / optimising digital images.
                  </li>
                  <li>
                    Communicating with external companies including liaising
                    with Printers
                  </li>
                </ul>
                <h2 className="dheading mt-4">Background/Requirements</h2>
                <ul className="dli dpad lh-lg mt-4">
                  <li>
                    Graphic Design background, covering online and traditional
                    channels.
                  </li>
                  <li>
                    Proven record of managing multiple projects, often in a time
                    pressured environment.
                  </li>
                  <li>
                    color: #000; font-family: Red Hat Text; font-size: 16px;
                    font-style: normal; font-weight: 300; line-height: normal;
                    text-transform: capitalize;
                  </li>
                  <li>Have skills in digital retouching and image editing.</li>
                  <li>
                    Ability to communicate your creative vision across the team.
                  </li>
                </ul>
                <h2 className="dheading dpad">Required skills</h2>
                <div className="mt-4 d-flex gap-4  text-center">
                  <p className="dl text-center p-3   ">Adobe</p>
                  <h4 className="dl text-center p-3">Creative</h4>
                  <h4 className="dl text-center p-3">Website</h4>
                  <h4 className="dl text-center p-3">Mac</h4>
                  <h4 className="dl text-center p-3">Digital Designs</h4>
                </div>
                <h1 className="dheading dpad"> Application questions</h1>
                <div className="">
                  <Container className=" dapp   Card ">
                    <div className="text-center ">
                      <Row className="justify-content-md-center">
                        <div className="d-flex justify-content-between ">
                          <Col xs lg="7" className="mt-5">
                            <p className="text-center  ">
                              Have you worked on Print Brief i.e. Brochures, POS
                              etc?
                            </p>
                          </Col>
                          <Col className="mt-5">
                            <div className="check ">
                              <Form.Check
                                inline
                                // label="1"
                                name="group1"
                                type="radio"
                                id={`inline-radio-1`}
                              />
                              <Form.Check
                                inline
                                // label="2"
                                name="group1"
                                type="radio"
                                id={`inline-radio-2`}
                              />
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </Container>
                  <Container className="text dapp Card mt-4">
                    <div className="text-center ">
                      <Row className="justify-content-md-center">
                        <div className="d-flex justify-content-between ">
                          <Col xs lg="7" className="mt-5">
                            <p className="text-center  ">
                              Have you worked on Print Brief i.e. Brochures, POS
                              etc?
                            </p>
                          </Col>
                          <Col className="mt-5">
                            <div className="check ">
                              <Form.Check
                                inline
                                // label="1"
                                name="group1"
                                type="radio"
                                id={`inline-radio-1`}
                              />
                              <Form.Check
                                inline
                                // label="2"
                                name="group1"
                                type="radio"
                                id={`inline-radio-2`}
                              />
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </Container>
                </div>

                <div className="d-flex gap-1 justify-content-center">
                  <div className=" dpad ">
                    <button className="dabtn d-flex text-center justify-content-center">
                      apply
                    </button>
                    <button className="dgabtn dheading mt-1 d-flex text-center justify-content-center">
                      get job alert
                    </button>
                  </div>
                </div>

                <Container className="mt-5">
                  <h5>
                    Not quite what you are looking for? Try these similar
                    searches
                  </h5>
                  <Row>
                    <Col>
                      <a href="">something</a>
                    </Col>
                    <Col>
                      <a href="">something</a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
