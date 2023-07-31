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
  const [coverLetter, setCoverLetter] = useState("");
  const [coverLetterDB, setCoverLetterDB] = useState("");
  const [value, setValue] = useState("");
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      jobTitle: job || "",
    }));
  }, [job]);

  const initialFormData = {
    fullName: "",
    email: user.email,
    jobTitle: job || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !fileData) {
      toast.error("Please enter all fields");
      return;
    } else {
      const data = {
        ...formData,
        phoneNumber: value,
        dbFile: fileDataforDB,
        Files: fileData,
        userId: user._id,
      };

      fetch("/user/applyJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Error sending data to the backend.");
            throw new Error("Error sending data to the backend.");
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              job: "",
              fullName: "",
            }));
            setValue("");
            setFileData();
            setFileDataforDB();

            toast.success(data.message);
          }
        })
        .catch((error) => {
          console.log("Error sending data:", error);
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
      setFileData(attachment);
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            </Form.Group>
            <Form.Group className=" mt-3" controlId="formBasicEmail">
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
            <Form.Group className="my-3" controlId="phone">
              <p>Enter Mobile Number</p>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {" "}
                <p>Submit Your CV / Resume</p>
                <FileBase64 type="file" onDone={handleFileUpload} />
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
