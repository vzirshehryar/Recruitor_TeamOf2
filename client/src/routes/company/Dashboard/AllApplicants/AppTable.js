import React, { useState } from 'react';
import "./AppTable.css"
import axios from 'axios';
import { useEffect } from 'react';
const AppTable = () => {

    const [data, setData] = useState(null);
    
    useEffect(() => {
    
      const apiUrl = '/job/getallapplicants';
      const token = localStorage.getItem('token');
  
      const headers = {
        Authorization: token,
      };
  
      axios.get(apiUrl, { headers })
        .then((response) => {
          console.log(response.data);
          // setData(response.data.courses[0]);
          
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

      const renderRows = () => {
        return data.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            {/* Render the cells for each column */}
          </tr>
        ));
      };
      const handleCheckboxChange = (index) => {
        // Add your logic to handle checkbox change
        // Update the data array or state accordingly
      };
  return (
    <div className="table-container">
        <div className="allapplicants-heading"> Applicants List</div>
      <table className="custom-table">
        <thead>
          <tr>
            <th><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.7778 0H2.22222C0.994923 0 0 0.994923 0 2.22222V17.7778C0 19.0051 0.994923 20 2.22222 20H17.7778C19.0051 20 20 19.0051 20 17.7778V2.22222C20 0.994923 19.0051 0 17.7778 0Z" fill="#6D0E9D"/>
                <path d="M4 12L6.76923 15L16 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </th>
            <th>Name</th>
            <th>Applied Date</th>
            <th>Job Role</th>
            <th>Hiring Stage</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your data and create table rows */}
          {/* Replace placeholders with actual data */}
          <tr>
            <td>
                <input type='checkbox' className="checkbox-container"></input>
            </td>
            <td>John Doe</td>
            <td>2023-08-09</td>
            <td>Software Engineer</td>
            <td><div className="stage-rectangle">Interview</div></td>
            <td><div className="status-rectangle"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
              <circle cx="3" cy="3" r="3" fill="#007F00"/>
            </svg> Ongoing</div></td>
            <td>
              <div className="action-buttons">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="white"/>
                  <path d="M17.1566 11.6868H11.5904C11.1686 11.6868 10.7641 11.8544 10.4658 12.1526C10.1676 12.4509 10 12.8554 10 13.2772V24.4096C10 24.8314 10.1676 25.2359 10.4658 25.5342C10.7641 25.8324 11.1686 26 11.5904 26H22.7228C23.1446 26 23.5491 25.8324 23.8474 25.5342C24.1456 25.2359 24.3132 24.8314 24.3132 24.4096V18.8434M23.1204 10.4941C23.4368 10.1777 23.8658 10 24.3132 10C24.7605 10 25.1896 10.1777 25.5059 10.4941C25.8223 10.8104 26 11.2395 26 11.6868C26 12.1342 25.8223 12.5632 25.5059 12.8796L17.9518 20.4338L14.7711 21.2289L15.5662 18.0482L23.1204 10.4941Z" stroke="#524E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="white"/>
                  <path d="M11 13.2H12.6M12.6 13.2H25.4M12.6 13.2V24.4C12.6 24.8243 12.7686 25.2313 13.0686 25.5314C13.3687 25.8314 13.7757 26 14.2 26H22.2C22.6243 26 23.0313 25.8314 23.3314 25.5314C23.6314 25.2313 23.8 24.8243 23.8 24.4V13.2M15 13.2V11.6C15 11.1757 15.1686 10.7687 15.4686 10.4686C15.7687 10.1686 16.1757 10 16.6 10H19.8C20.2243 10 20.6313 10.1686 20.9314 10.4686C21.2314 10.7687 21.4 11.1757 21.4 11.6V13.2M16.6 17.2V22M19.8 17.2V22" stroke="#524E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M18.7778 1H3.22222C1.99492 1 1 1.99492 1 3.22222V18.7778C1 20.0051 1.99492 21 3.22222 21H18.7778C20.0051 21 21 20.0051 21 18.7778V3.22222C21 1.99492 20.0051 1 18.7778 1Z" stroke="#929292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></td> */}
            <td>
                <input type='checkbox' className="checkbox-container"></input>
            </td>
            <td>John Doe</td>
            <td>2023-08-09</td>
            <td>Software Engineer</td>
            <td><div className="stage-rectangle">Interview</div></td>
            <td><div className="status-rectangle-cancel"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
              <circle cx="3" cy="3" r="3" fill="#F90000"/>
            </svg> Cancel</div></td>
            <td>
              <div className="action-buttons">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="white"/>
                  <path d="M17.1566 11.6868H11.5904C11.1686 11.6868 10.7641 11.8544 10.4658 12.1526C10.1676 12.4509 10 12.8554 10 13.2772V24.4096C10 24.8314 10.1676 25.2359 10.4658 25.5342C10.7641 25.8324 11.1686 26 11.5904 26H22.7228C23.1446 26 23.5491 25.8324 23.8474 25.5342C24.1456 25.2359 24.3132 24.8314 24.3132 24.4096V18.8434M23.1204 10.4941C23.4368 10.1777 23.8658 10 24.3132 10C24.7605 10 25.1896 10.1777 25.5059 10.4941C25.8223 10.8104 26 11.2395 26 11.6868C26 12.1342 25.8223 12.5632 25.5059 12.8796L17.9518 20.4338L14.7711 21.2289L15.5662 18.0482L23.1204 10.4941Z" stroke="#524E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="white"/>
                  <path d="M11 13.2H12.6M12.6 13.2H25.4M12.6 13.2V24.4C12.6 24.8243 12.7686 25.2313 13.0686 25.5314C13.3687 25.8314 13.7757 26 14.2 26H22.2C22.6243 26 23.0313 25.8314 23.3314 25.5314C23.6314 25.2313 23.8 24.8243 23.8 24.4V13.2M15 13.2V11.6C15 11.1757 15.1686 10.7687 15.4686 10.4686C15.7687 10.1686 16.1757 10 16.6 10H19.8C20.2243 10 20.6313 10.1686 20.9314 10.4686C21.2314 10.7687 21.4 11.1757 21.4 11.6V13.2M16.6 17.2V22M19.8 17.2V22" stroke="#524E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </td>
          </tr>
          {/* Repeat the above structure for each row */}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
