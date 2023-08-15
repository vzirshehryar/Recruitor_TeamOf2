import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Experiences/ExpForm.css";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const AwardsForm = () => {

    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const handleChooseFile = () => {
        fileInputRef.current.click();
      };

      const [formData, setFormData] = useState({
        awardTitle: '',
        institute: '',
        issueDate: '',
        awardImage: null,
        description: '',
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => {
           
          return {
            ...prevFormData,
            [id]: value,
          };
        });
      };

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              awardImage: reader.result, // Set the image data as base64 string
            }));
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const formattedData = {
          awardTitle: formData.awardTitle,
          institute: formData.institute,
          issueDate: formData.issueDate,
          awardImage: formData.awardImage,
          desrciption: formData.description,
        };

        const token = localStorage.getItem('token');
        const apiUrl = '/user/award/postData';
    
        const headers = {
          Authorization: token,
        };
        axios.post(apiUrl, formattedData, { headers })
          .then((response) => {
            
            const updateprogress = localStorage.getItem('progress');
            const newprogress = parseInt(updateprogress, 10);
            const addprogress = newprogress + 10;
            const finalprogress = addprogress.toString();
            localStorage.setItem('progress', finalprogress);
            toast.success(response.data.message);
            setTimeout(() => {
              navigate('/awards/submit-awards');
            }, 1500);
          })
          .catch((error) => {
            console.error(error);
            toast.error("Error sending data to the backend.");
          });
      };  

    return (
        <div className="form-container-cour">
          <div className="shadow-exp">
            <form onSubmit={handleSubmit}>
              <div className="email-container-exp">
                <label className="label-exp" htmlFor="awardTitle">
                  Award Title
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="awardTitle"
                  className="input-field-exp"
                  placeholder=""
                  required
                  value={formData.awardTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="email-container-exp">
                <label className="label-exp" htmlFor="institute">
                  Issued by (Company / Institue)
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="text"
                  id="institute"
                  className="input-field-exp"
                  placeholder=""
                  required
                  value={formData.institute}
                  onChange={handleChange}
                />
              </div>
              
                <div className="input-group-exp-1">
                  <label className="label-exp" htmlFor="issueDate">
                      Issue Date
                      <span className="required-exp">*</span>
                  </label>
                      <input
                      type="date"
                      id="issueDate"
                      className="input-field-exp"
                      placeholder="DD-MM-YYYY"
                      required
                      value={formData.issueDate}
                      onChange={handleChange}
                      />
                </div>
                <div className="input-group-exp-1">
                  <label htmlFor="awardImage" className="label-exp">
                      Award Image
                      {/* <span className="required-exp">*</span> */}
                  </label>
                  <div className="file-input-wrapper">
                      <button className="custom-file-button" onClick={handleChooseFile}>
                        Choose Image
                      </button>
                      <input
                      type="file"
                      id="awardImage"
                      className="input-field-awards"
                      required
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      />
                  </div>
                </div>
                
              <div className="description-container-exp">
                <label className="label-exp" htmlFor="description">
                  Description
                  <span className="required-exp">*</span>
                </label>
                <input
                  type="description"
                  id="description"
                  className="input-field-exp-1"
                  placeholder=""
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              
              <div className="button-container-exp">
               <button type="submit">Submit</button> 
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      );
  };
  
  export default AwardsForm;