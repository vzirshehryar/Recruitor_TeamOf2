import { useState } from "react";
import editProfileStyle from "./EditProfileCV.module.css";
import profileStyles from "./UpdateProfilePage.module.css";
import { FaFilePdf } from "react-icons/fa";
import Header from "../../Home/components/header";
import Footer from "../../Home/components/footer";

import ProfileSideBar from "./ProfileSideBar";
import LanguagesForm from "./LanguagesForm";
import WorkExperienceForm from "./WorkExperienceForm";
import QualificationsForm from "./QualificationsForm";

// function AdditionalInformation({
//   title,
//   description,
//   buttonTitle,
//   setDisplay,
//   setForm,
// }) {

//   const Form =

//   return (
//     <div
//       className={profileStyles["personal-information-container-dotted"]}
//       style={{ position: "relative" }}
//     >
//       <div className={profileStyles["heading-container-dotted"]}>
//         <h3>{title}</h3>
//       </div>
//       <div className={profileStyles["details-container"]} style={{}}>
//         <div className={profileStyles["lower-container"]}>
//           <p className={profileStyles["additional-details"]}>{description}</p>
//         </div>
//         <a
//           href="#"
//           className={`${profileStyles["absolute-buttons"]}`}
//           style={{ position: "absolute" }}
//           onClick={(e) => {
//             e.preventDefault();
//             setForm(title);
//             setDisplay(true);
//           }}
//         >
//           Add {buttonTitle} +
//         </a>
//       </div>
//     </div>
//   );
// }

export default function UpdateProfilePage() {
  const [showDisplay, setDisplay] = useState(false);
  const [formName, setForm] = useState("");

  return (
    <>
      <Header />
      <div className={profileStyles.container}>
        <div className={profileStyles["inner-container"]}>
          <div className={profileStyles["left"]}>
            <ProfileSideBar />
          </div>
          <div className={profileStyles["right"]}>
            <div className={profileStyles["personal-information-container"]}>
              <div className={profileStyles["heading-container"]}>
                <h3>Looking For</h3>
                <a href="#" className={profileStyles["buttons"]}>
                  Edit
                </a>
              </div>
              <div
                className={profileStyles["details-container"]}
                style={{ position: "relative" }}
              >
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
                <a
                  href="#"
                  className={profileStyles["buttons"]}
                  style={{ position: "absolute", right: "20px", top: "88%" }}
                >
                  Add Sector & Roles +
                </a>
              </div>
            </div>
            <WorkExperienceForm />
            <QualificationsForm />
            {/* <AdditionalInformation
              title={"Work Experience"}
              description={
                "Adding work experience improves your chances of being discovered."
              }
              buttonTitle={"Work Experience"}
              setDisplay={setDisplay}
              setForm={setForm}
            />
            <AdditionalInformation
              title={"Qualifications"}
              description={
                "Adding Qulatifications improves your chances of being discovered."
              }
              buttonTitle={"Qualification"}
              setDisplay={setDisplay}
              setForm={setForm}
            />
            <AdditionalInformation
              title={"Skills"}
              description={
                "Adding Skills improves your chances of being discovered."
              }
              buttonTitle={"Skills & Expertise"}
              setDisplay={setDisplay}
              setForm={setForm}
            /> */}
            <LanguagesForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
