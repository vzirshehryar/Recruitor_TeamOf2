import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider1 = ({ children }) => {
    const [name, setName] = useState({});

    const [jobTitle, setjobTitle] = useState({});

    const [email, setEmail] = useState({});

    const [address, setAddress] = useState({});

    const [companyName, setCompanyName] = useState({});

    const [hiringManagerName, setHiringManagerName] = useState({});

    const [introduction, setIntroduction] = useState([]);



    return (
        <UserContext.Provider1
            value={{
                name,
                setName,
                jobTitle,    
                setjobTitle,
                email,
                setEmail,
                address,
                setAddress,
                companyName,
                setCompanyName,
                hiringManagerName,
                setHiringManagerName,
                introduction,
                setIntroduction,
            }}
        >
            {children}
        </UserContext.Provider1>
    );
};


// FormDataContext.js

// import React, { createContext, useContext, useState } from "react";

// const FormDataContext = createContext();

// export const FormDataProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     jobTitle: "",
//     email: "",
//     address: "",
//     companyName: "",
//     hiringManager: "",
//     letterDetails: "",
//   });

//   const updateFormData = (newData) => {
//     setFormData(newData);
//   };

//   return (
//     <FormDataContext.Provider value={{ formData, updateFormData }}>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// export const useFormData = () => {
//   return useContext(FormDataContext);
// };
