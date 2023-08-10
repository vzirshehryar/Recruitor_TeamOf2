import React from "react";
import AppSearch from "./AppSearch";
import AppTable from "./AppTable";
import Sidebar from "../../Sidebar";

const Applicants = () =>{

    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container2">
            
            <AppSearch />
            <AppTable />
        </div>
        </>
    );
}

export default Applicants;