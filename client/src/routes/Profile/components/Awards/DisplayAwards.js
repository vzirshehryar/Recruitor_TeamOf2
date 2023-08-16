import React, { useState, useEffect } from 'react';
import '../Experiences/DataDisplay.css';
import axios from 'axios';
import Modal from 'react-modal';

const DisplayAwards = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const openImagePopup = (imageData) => {
    setSelectedImageData(imageData);
    setShowImagePopup(true);
  };

  const closeImagePopup = () => {
    setShowImagePopup(false);
    setSelectedImageData('');
  };

  useEffect(() => {
    const apiUrl = '/user/award/getData';
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: token,
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        setData(response.data.awards[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="data-container">
      {data && (
        <div className="data-box">
          <div className="dots-button" onClick={toggleDropdown}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-profile">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )}
          <div className="data-heading">{data.awardTitle}</div>
          <div className="data-dates">
          {new Date(data.issueDate).toLocaleDateString(
                      "en-GB",
                      { day: "numeric", month: "short", year: "numeric" }
          )} 
          </div>
          <div className="data-company">Institute: {data.institute}</div>
          <div className="data-description">
            <img
              src={data.awardImage}
              alt="Image"
              style={{ cursor: 'pointer', maxWidth: '200px', maxHeight: '200px' }}
              onClick={() => openImagePopup(data.awardImage)}
            />
          </div>
        </div>
      )}
      {/* Render the image popup when showImagePopup is true */}
      <Modal
        isOpen={showImagePopup}
        onRequestClose={closeImagePopup}
        contentLabel="Image Popup"
      >
        <button className="close-button" onClick={closeImagePopup}>X</button>
        {selectedImageData && (
          <img
            src={selectedImageData}
            alt="Image"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        )}
      </Modal>
    </div>
  );
};

export default DisplayAwards;
