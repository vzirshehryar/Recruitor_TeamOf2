import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [companyInfo, setcompanyInfo] = useState({});

    const [jobBasics, setjobBasics] = useState({});

    const [techDetails, setTechDetails] = useState({});

    const [payBenefits, setPayBenefits] = useState({});

    const [preferences, setPreferences] = useState({});

    const [postJobReview, setPostJobReview] = useState({});

    const [keyQualities, setKeyQualities] = useState({});

    /*const updateUser = (newUserInfo) => {
        setUserInfo((prevState) => ({
            ...prevState,
            ...newUserInfo,
        }));
    };*/

    return (
        <UserContext.Provider
            value={{
                companyInfo,
                setcompanyInfo,
                jobBasics,
                setjobBasics,
                techDetails,
                setTechDetails,
                payBenefits,
                setPayBenefits,
                preferences,
                setPreferences,
                postJobReview,
                setPostJobReview,
                keyQualities,
                setKeyQualities,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
