import React from "react";
import ListingsTable from "./ListingsTable";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Listings = () =>{

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
            <ListingsTable />
            <Footer />
        </div>
        </>
    );
}

export default Listings;