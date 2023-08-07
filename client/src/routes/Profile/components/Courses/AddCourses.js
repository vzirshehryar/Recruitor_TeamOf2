import React from 'react';
import { Link } from 'react-router-dom';
import '../AddExperiences.css'; // Import the CSS file for styling
import Sidenav from '../Sidenav';

const AddCourses = () => {
    return (
        <>
        
        <div className="container-add-exp">
          <div className="rectangle-add-exp">
            <h2 className="experience-heading">Add Courses</h2>
            <Link to="/courses/form">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 150 150" fill="none">
                <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM107.812 79.6875H79.6875V107.812C79.6875 109.056 79.1936 110.248 78.3146 111.127C77.4355 112.006 76.2432 112.5 75 112.5C73.7568 112.5 72.5645 112.006 71.6854 111.127C70.8064 110.248 70.3125 109.056 70.3125 107.812V79.6875H42.1875C40.9443 79.6875 39.752 79.1936 38.8729 78.3146C37.9939 77.4355 37.5 76.2432 37.5 75C37.5 73.7568 37.9939 72.5645 38.8729 71.6854C39.752 70.8064 40.9443 70.3125 42.1875 70.3125H70.3125V42.1875C70.3125 40.9443 70.8064 39.752 71.6854 38.8729C72.5645 37.9939 73.7568 37.5 75 37.5C76.2432 37.5 77.4355 37.9939 78.3146 38.8729C79.1936 39.752 79.6875 40.9443 79.6875 42.1875V70.3125H107.812C109.056 70.3125 110.248 70.8064 111.127 71.6854C112.006 72.5645 112.5 73.7568 112.5 75C112.5 76.2432 112.006 77.4355 111.127 78.3146C110.248 79.1936 109.056 79.6875 107.812 79.6875Z" fill="#6D0E9D" />
              </svg>
            </div>
            </Link>
          </div>
        </div>
        </>
      );
};

export default AddCourses;
