import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';

const RecentJobPosts = () => {

  const [activeTableButton, setActiveTableButton] = useState();

  const buttonTabStyles = {
    backgroundColor: activeTableButton ? "#6D0E9D" : "#F4F5F9"
  }

  return (
    <>
      <div className="mange-hiring-recent-job-table-component">
        <div className="manage-hiring-recent-job-top-row">
          <div className="recent-job-top-row-heading">
            <h1>Recent Job Posts</h1>
          </div>
          <div className="recent-job-top-row-buttons">
            <button >Monthly</button>
            <button>Weekly</button>
            <button>Today</button>
          </div>
        </div>
        <div className="recent-job-post-table-container">
          <table className="recent-job-table">
            <thead>
              <tr>
                <th className="recent-job-table-headings">Job Title</th>
                <th>Category</th>
                <th>Openings</th>
                <th>Applications</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <button>No Post</button>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <button>No Post</button>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <button>No Post</button>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <button>No Post</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recent-job-table-pagination-footer">
          <div>
            <div>
              <button className="btn-transparent">&lt;</button>
            </div>
            <div>1</div>
            <div>/</div>
            <div>16</div>
            <div>
              <button>&gt;</button>
            </div>
          </div>
          <div>
            <span>rows per page: </span>
            <div>4 &#8964;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentJobPosts;
