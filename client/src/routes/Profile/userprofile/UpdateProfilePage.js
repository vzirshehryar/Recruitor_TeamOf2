import { useState } from 'react';
import editProfileStyle from './EditProfileCV.module.css'
import profileStyles from './UpdateProfilePage.module.css'
import { FaFilePdf } from 'react-icons/fa';

import axios from 'axios';

function EditProfileCV({ setDisplay, setForm }) {
    return (
        <div className={editProfileStyle["edit-profile-container"]}>
            <div className={editProfileStyle["third-div"]}>
                <h3>Visibility</h3>
                <div>
                    <label>
                        <input type="checkbox" className={editProfileStyle.sliderinput} />
                        <span className={`${editProfileStyle.slider} ${editProfileStyle.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={editProfileStyle["second-div"]}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                    <h4>About You</h4>
                    <a href='#' className={profileStyles["buttons"]} style={{ marginRight: "10px", fontSize: "10px" }} onClick={(e) => { e.preventDefault(); setForm("AboutYou"); setDisplay(true) }}>Edit</a>
                </div>
                <div style={{ padding: "10px" }}>
                    <ul style={{ marginBottom: "20px" }}>
                        <li>
                            <h3 style={{ color: "black" }}>Jhon Wick</h3>
                            <div style={{ backgroundColor: "black", padding: "6px", borderRadius: "50%", marginTop: "5px", color: "white" }}>
                                <h3 >JW</h3>
                            </div>
                        </li>
                        <li>
                            <p>9212483678</p>
                        </li>
                        <li>
                            <p>jhonwick@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={editProfileStyle["second-div"]}>
                <div style={{ padding: "10px" }}>
                    <h4>Profile</h4>
                </div>
                <div style={{ padding: "10px" }}>
                    <ul>
                        <li>
                            <p>CV Upload</p>
                            <input type="checkbox" checked disabled />
                        </li>
                        <li>
                            <p>About You</p>
                            <input type="checkbox" checked disabled />
                        </li>
                        <li>
                            <p>Looking For</p>
                            <input type="checkbox" checked disabled />
                        </li>
                        <li>
                            <p>Status And Availability</p>
                            <input type="checkbox" disabled />
                        </li>
                        <li>
                            <p>Work Experience</p>
                            <input type="checkbox" disabled />
                        </li>
                        <li>
                            <p>Qualifications</p>
                            <input type="checkbox" disabled />
                        </li>
                    </ul>
                    <button className={editProfileStyle.button}><h3>Update My Profile</h3></button>
                </div>
            </div>
            <div className={editProfileStyle["third-div"]}>
                <h3>CV Visibility</h3>
                <div>
                    <label>
                        <input type="checkbox" className={editProfileStyle.sliderinput} />
                        <span className={`${editProfileStyle.slider} ${editProfileStyle.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={editProfileStyle["fourth-div"]}>
                <h4>Temporary Work</h4>
                <p>Are you available for temporary work? we'll feature your profile to recuiters</p>
                <button className={editProfileStyle.button}><h3>Edit Availability</h3></button>
            </div>
        </div>
    );
}



function AdditionalInformation({ title, description, buttonTitle, setDisplay, setForm }) {
    return (
        <div className={profileStyles["personal-information-container-dotted"]} style={{ position: "relative" }}>
            <div className={profileStyles["heading-container-dotted"]}>
                <h3>{title}</h3>
            </div>
            <div className={profileStyles["details-container"]} style={{}}>
                <div className={profileStyles["lower-container"]}>
                    <p className={profileStyles["additional-details"]}>{description}</p>
                </div>
                <a href='#' className={`${profileStyles["absolute-buttons"]}`} style={{ position: "absolute" }} onClick={(e) => { e.preventDefault(); setForm(title); setDisplay(true) }}>Add {buttonTitle} +</a>
            </div>
        </div>
    );
}



export default function UpdateProfilePage() {
    const [showDisplay, setDisplay] = useState(false);
    const [formName, setForm] = useState("");
    const [profileData, setProfileData] = useState({
        WorkExperience: [],
        Qualifications: [],
        Skills: [],
        Languages: [],
        CoverLetter: [],
        PersonalStatement: [],
        CarDrivingLicense: [],
    });



    function EditFrom() {

        const [formData, setFormData] = useState({
            WorkExperience: { jobTitle: "", employmentType: "", industry: "", startDate: "", currentlyWorking: "", endDate: "", company: "", companyWebsite: "", country: "", state: "", city: "", description: "" },
            Qualifications: { school: "", degree: "", fieldOfStudy: "", startMonth: "", startYear: "", endMonth: "", endYear: "", grades: "", activities_societies: "", description: "" },
            Skills: { skill: "" },
            Languages: { language: "", speakingLevel: "", listeningLevel: "", writingLevel: "", readingLevel: "" },
            CoverLetter: {},
            PersonalStatement: {},
            CarDrivingLicense: {},
        });

        function handleChange(e) {
            const { name, value } = e.target;
            console.log(name + " || " + value);
            setFormData(prevFormData => ({
                ...prevFormData,
                [formName]: {
                    ...prevFormData.WorkExperience,
                    [name]: value,
                },
            }));
        };

        function chooseField(data) {
            switch (data) {
                case "AboutYouForm":
                    return "jobExperience";
                case "WorkExperience":
                    return "jobExperience";
                case "Qualifications":
                    return "jobExperience";
                case "Languages":
                    return "jobExperience";
                case "Skills":
                    return "jobExperience";
                case "CoverLetter":
                    return "jobExperience";
                case "PersonalStatement":
                    return "jobExperience";
                case "CarDrivingLicense":
                    return "jobExperience";
                default:
                    return "jobExperience";
            }
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await axios.post(`http://localhost:4000/${chooseField(formData)}/postData`, formData[formName]);
                console.log("Data inserted successfully");
            } catch (error) {
                console.log(error);
            }
        }

        function AboutYouForm() {
            return (
                <ul>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>First Name*</p>
                            <input type='text' required onChange={handleChange} />
                        </label>
                        <label>
                            <p>Last Name*</p>
                            <input type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Phone number*</p>
                            <input type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Country</p>
                            <input type='text' onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Town</p>
                            <input type='text' onChange={handleChange} />
                        </label>
                    </li>
                </ul>
            );
        }

        function WorkExperienceForm() {
            return (
                <ul>
                    <li>
                        <label>
                            <p>Job Title*</p>
                            <input name="jobTitle" type='text' value={formData['WorkExperience'].jobTitle} onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Employement Type*</p>
                            <input name="employmentType" type='text' onChange={handleChange} />
                        </label>
                        <label>
                            <p>Industry*</p>
                            <input name="industry" type='text' onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Start Date*</p>
                            <input name="startDate" type='text' onChange={handleChange} />
                        </label>
                        <label className={profileStyles['slider-label']} >
                            <p>Currently Working?</p>
                            <input name="currentlyWorking" type="checkbox" className={editProfileStyle.sliderinput} onChange={handleChange} />
                            <span className={`${profileStyles.slider} ${editProfileStyle.round}`} ></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>End Date*</p>
                            <input name="endDate" type='text' style={{ width: "49%" }} onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Company*</p>
                            <input name="company" type='text' onChange={handleChange} />
                        </label>
                        <label>
                            <p>Company Website*</p>
                            <input name="companyWebsite" type='text' onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Country*</p>
                            <input name="country" type='text' onChange={handleChange} />
                        </label>
                        <label>
                            <p>State*</p>
                            <input name="state" type='text' onChange={handleChange} />
                        </label>
                        <label>
                            <p>City*</p>
                            <input name="city" type='text' onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Description*</p>
                            <input name="description" type='text' onChange={handleChange} />
                        </label>
                    </li>
                </ul>
            );
        }

        function QualificationsForm() {
            return (
                <ul>
                    <li>
                        <label>
                            <p>School*</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Degree*</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Field Of Study*</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Start Month</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                        <label>
                            <p>Year</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>End Month</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                        <label>
                            <p>Year</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Grades*</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Activities And Scocieties</p>
                            <input name="" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                </ul>
            );
        }

        function LanguagesForm() {
            return (
                <ul>
                    <li>
                        <label>
                            <p>Language*</p>
                            <input name="language" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Speaking Level*</p>
                            <input name="speakingLevel" type='text' required onChange={handleChange} />
                        </label>
                        <label>
                            <p>Listening Level</p>
                            <input name="listeningLevel" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                    <li className={profileStyles["special-item"]}>
                        <label>
                            <p>Writing Level</p>
                            <input name="writingLevel" type='text' required onChange={handleChange} />
                        </label>
                        <label>
                            <p>Reading Level</p>
                            <input name="readingLevel" type='text' required onChange={handleChange} />
                        </label>
                    </li>
                </ul>
            );
        }

        const forms = {
            AboutYou: <AboutYouForm />,
            WorkExperience: <WorkExperienceForm />,
            Qualifications: <QualificationsForm />,
            Languages: <LanguagesForm />
        }

        return (
            <div className={`${profileStyles["edit-form-container"]}  ${showDisplay === true ? profileStyles["show"] : profileStyles["hidden"]}`}>
                <div className={profileStyles["edit-form"]}>
                    <h3 style={{ color: "black", fontSize: "28px" }}>{formName}</h3>
                    <form onSubmit={handleSubmit}>
                        {forms[formName.split(' ').join('')]}
                        <div className={profileStyles["edit-form-buttons"]}>
                            <button className={profileStyles["form-button-cancel"]} onClick={(e) => { e.preventDefault(); setDisplay(false) }}>Cancel</button>
                            <button className={profileStyles["form-button-save"]}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <>
            <EditFrom />
            <div className={profileStyles.container}>
                <div className={profileStyles['inner-container']}>
                    <div className={profileStyles['left']}>
                        <EditProfileCV setDisplay={setDisplay} setForm={setForm} />
                    </div>
                    <div className={profileStyles['right']}>
                        <div className={profileStyles["personal-information-container"]}>
                            <div className={profileStyles["heading-container"]}>
                                <h3>CV</h3>
                                <a href='#' className={profileStyles["buttons"]}>Update</a>
                            </div>
                            <div className={profileStyles["details-container"]}>
                                <div className={profileStyles["lower-container"]}>
                                    <div className={profileStyles["lower-first-container"]}>
                                        <h3>Your Current CV</h3>
                                        <p><FaFilePdf size={10} /> Jhon.pdf</p>
                                        <p>Added 21/08/2023</p>
                                    </div>
                                    <div style={{ paddingTop: "30px" }}>
                                        <a href='#' className={profileStyles["buttons"]}>Download <i class="fas fa-download"></i></a>
                                    </div>
                                </div>
                                <div className={profileStyles["cv-review-container"]}>
                                    <button style={{ position: "absolute", right: "20px", top: "10px" }}>X</button>
                                    <h3>Send me a free professional CV review from TopCV</h3>
                                    <button>Request a CV Review</button>
                                </div>
                            </div>
                        </div>
                        <div className={profileStyles["personal-information-container"]}>
                            <div className={profileStyles["heading-container"]}>
                                <h3>Looking For</h3>
                                <a href='#' className={profileStyles["buttons"]}>Edit</a>
                            </div>
                            <div className={profileStyles["details-container"]} style={{ position: "relative" }}>
                                <div className={profileStyles["lower-container"]}>
                                    <ul>
                                        <li>
                                            <h3>Desired job title</h3>
                                            <p>uiux Designer</p>
                                        </li>
                                        <li>
                                            <h3>Salary</h3>
                                            <p>£10,000 per annum</p>
                                        </li>
                                        <li>
                                            <h3>Location</h3>
                                            <p>Pakistan</p>
                                        </li>
                                        <li>
                                            <h3>Job type</h3>
                                            <p>Full-time, Part-time</p>
                                        </li>
                                        <li>
                                            <h3 style={{ marginBottom: "20px" }}>Sectors & roles</h3>
                                        </li>
                                    </ul>
                                </div>
                                <a href='#' className={profileStyles["buttons"]} style={{ position: "absolute", right: "20px", top: "88%" }}>Add Sector & Roles +</a>
                            </div>
                        </div>
                        <AdditionalInformation title={"Work Experience"} description={"Adding work experience improves your chances of being discovered."} buttonTitle={"Work Experience"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Qualifications"} description={"Adding work experience improves your chances of being discovered."} buttonTitle={"Qualification"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Skills"} description={"Adding work experience improves your chances of being discovered."} buttonTitle={"Skills & Expertise"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Languages"} description={""} buttonTitle={"Languages"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Cover letter"} description={""} buttonTitle={"Cover letter"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Personal Statement"} description={""} buttonTitle={"Personal Statement"} setDisplay={setDisplay} setForm={setForm} />
                        <AdditionalInformation title={"Car & Driving License"} description={""} buttonTitle={"Car & Driving License"} setDisplay={setDisplay} setForm={setForm} />
                    </div>
                </div>
            </div>
        </>
    );
}