import AppSearch from "./AppSearch";
import AppTable from "./AppTable";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Applicants = () =>{
    
    const navigate = useNavigate();
    const handleAuth = () =>{
        const type = localStorage.getItem("userType");
        if (type !== "company")
        {
            navigate("/loginAsCompany");
        }
    }
    useEffect(() => {
        handleAuth();
      }, []);
    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container2">
            
            <AppTable />
            <Footer />
        </div>
        
        </>
    );
}

export default Applicants;