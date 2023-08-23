import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "../UserSide.css";

const ApplyJob = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  const [fileData, setFileData] = useState();
  const [fileDataforDB, setFileDataforDB] = useState();
  const [value, setValue] = useState("");
  const data = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  const user = JSON.parse(data);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      jobTitle: job.jobTitle || "",
    }));
  }, [job]);

  const initialFormData = {
    fullName: "",
    email: user.email,
    jobTitle: job.jobTitle || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(localStorage.getItem("progress"), 10) < 70) {
      toast.error("Profile not complete");
      return;
    }

    if (!fileDataforDB) {
      toast.error("Please enter all fields");
      return;
    } else {
      const data = {
        // ...formData,
        // phoneNumber: value,
        resume: fileDataforDB,
        // Files: fileData,
        // userId: user._id,
      };

      fetch(`/job/apply/${job._id}`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
            setFileDataforDB();
            return;
          }
          // console.log(data);
          setFormData((prevFormData) => ({
            ...prevFormData,
            job: "",
            fullName: "",
          }));
          setValue("");
          setFileDataforDB();
          toast.success(data.message);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error);
        });
    }
  };

  const handleFileUpload = (file) => {
    if (
      file.type !== "application/pdf" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      toast.error("Invalid file format. Only PDF and DOCX files are allowed.");
      setFileData();

      return;
    } else {
      const attachment = {
        content: file.base64,
        filename: file.name,
        type: file.type,
        disposition: "attachment",
      };
      setFileDataforDB(file.base64);
      // setFileData(attachment);
    }
  };

  return (
    <div>
      <div className="col-lg">
        <button className="selectedJobApplyBtn" onClick={handleModal}>
          Apply Now
        </button>
      </div>

      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: 150, color: "#6D0E9D" }}>
            Apply Job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="applyjobform">
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <p>Enter Your Name</p>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <p>Enter Your Email</p>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                disabled
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </Form.Group> */}
            <Form.Group className=" my-2" controlId="formBasicEmail">
              <p>Job Application</p>
              <Form.Control
                type="text"
                name="job"
                value={formData.jobTitle}
                disabled
                onChange={handleChange}
                placeholder="Job title"
              />
            </Form.Group>
            {/* <Form.Group className="my-3" controlId="phone">
              <p>Enter Mobile Number</p>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </Form.Group> */}
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {" "}
                <p>Submit Your CV / Resume</p>
                <FileBase64
                  type="file"
                  onDone={handleFileUpload}
                  value={fileDataforDB}
                />
              </div>

              <div>
                <span className="mt-3"></span>
              </div>
            </div>

            <Button
              className="mt-4"
              style={{
                width: "100%",
                height: "60px",
                background: "#660099",
                color: "#FFFFFF",
                fontSize: "30px",
              }}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </Modal.Body>
        <ToastContainer />
      </Modal>
    </div>
  );
};

export default ApplyJob;
