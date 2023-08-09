import React from "react";
import ListingsTable from "./ListingsTable";
import Sidebar from "../../Sidebar";

const Listings = () =>{

    return(
        <>
        <Sidebar />
        <div className="dashboard-component-container2">
            <ListingsTable />
        </div>
        </>
    );
}

export default Listings;