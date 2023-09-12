import React from "react";
import ListingsTable from "./ListingsTable";
import Sidebar from "../../Sidebar";
import Footer from "../../../Home/components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../AllApplicants/AppTable.css";
const Listings = () => {
    const navigate = useNavigate();
    const handleAuth = () => {
        const type = localStorage.getItem("userType");
        if (type !== "company") {
            navigate("/loginAsCompany");
        }
    };
    useEffect(() => {
        handleAuth();
    }, []);
    return (
        <>
            <Sidebar />
            <div className="dashboard-component-container3">
                <ListingsTable />
                <div className="test9002">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Listings;
