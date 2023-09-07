// Import necessary components and dependencies
import AppSearch from "./AppSearch";
import AppTable from "./AppTable";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the Applicants component
const Applicants = () => {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle authentication and redirect if the user is not a company
  const handleAuth = () => {
    const type = localStorage.getItem("userType");
    if (type !== "company") {
      navigate("/loginAsCompany"); // Redirect to the login page for companies
    }
  };

  // Use useEffect to check authentication on component mount
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <>
      {/* Render the Sidebar component */}
      <Sidebar />

      {/* Main container for the Applicants component */}
      <div className="dashboard-component-container3">
        {/* Render the AppTable component */}
        <AppTable />

        {/* Render the Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Applicants;
