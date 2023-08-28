import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home/index";
import Login from "./routes/Auth/Login/index";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./routes/Auth/signUp/index";
import ForgetPassword from "./routes/Auth/ForgetPassword/index";
import SetPassword from "./routes/Auth/setPassword/index";
import JobFeed from "./routes/jobFeed/JobFeed";
import PersonalInformation from "./routes/Profile/components/Information";
import Experiences from "./routes/Profile/components/Experiences/Experiences";
import Education from "./routes/Profile/components/Education/Education";
import Courses from "./routes/Profile/components/Courses/Courses";
import Certifications from "./routes/Profile/components/Certifications/Certifications";
import Awards from "./routes/Profile/components/Awards/Awards";
import Publications from "./routes/Profile/components/Publications/Publications";
import Languages from "./routes/Profile/components/Languages/Languages";
import SubmitExp from "./routes/Profile/components/Experiences/SubmitExp";
import Skills from "./routes/Profile/components/Skills/Skills";
import SubmitEdu from "./routes/Profile/components/Education/SubmitEdu";
import SubmitCour from "./routes/Profile/components/Courses/SubmitCour";
import SubmitCert from "./routes/Profile/components/Certifications/SubmitCert";
import SubmitAwards from "./routes/Profile/components/Awards/SubmitAwards";
import SubmitPub from "./routes/Profile/components/Publications/SubmitPub";
import SubmitLang from "./routes/Profile/components/Languages/SubmitLang";
import SubmitSkills from "./routes/Profile/components/Skills/SubmitSkills";
// COMPANY ROUTES
import CompanySignUp from "./routes/Auth/signUp/CompanySignUp";
import LoginAsCompany from "./routes/Auth/Login/LoginAsCompany";
import CForgetPassword from "./routes/Auth/ForgetPassword/companyIndex";
import CSetPassword from "./routes/Auth/setPassword/companyIndex";

import CompanyHome from "./routes/company/home/Home";
import Jobs from "./routes/company/Dashboard/PostJobs/Jobs";
import Profile from "./routes/company/Dashboard/CompProfile/Profile";
import Applicants from "./routes/company/Dashboard/AllApplicants/Applicants";
import Listings from "./routes/company/Dashboard/JobListings/Listings";
import ManageHiring from "./routes/company/Dashboard/ManageHiring/ManageHiring";

import CompanyDashboard from "./routes/company/Dashboard/Dashboard/CompanyDashboard";
import EditJob from "./routes/company/Dashboard/PostJobs/EditJob";

import { CreateAcount } from "./routes/company/CreateAccount/CreateAcount";
import { JobBasics } from "./routes/company/JobBasics/JobBasics";
import { TechnologyDetail } from "./routes/company/TechnologyDetail/TechnologyDetail";
import { PayBenefits } from "./routes/company/PayBenefits/PayBenefits";
import { SetPreferences } from "./routes/company/SetPreferences/SetPreferences";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        //ROUTES OF USER
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/setNewPassword/:id" element={<SetPassword />} />
        <Route
          path="/jobFeed"
          element={
            <ProtectedRoute>
              <JobFeed />
            </ProtectedRoute>
          }
        />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/experiences/form" element={<Experiences />} />
        <Route path="/experiences/submit-exp" element={<SubmitExp />} />
        <Route path="/education/form" element={<Education />} />
        <Route path="/education/submit-edu" element={<SubmitEdu />} />
        <Route path="/courses/form" element={<Courses />} />
        <Route path="/courses/submit-cour" element={<SubmitCour />} />
        <Route path="/certifications/form" element={<Certifications />} />
        <Route path="/certifications/submit-cert" element={<SubmitCert />} />
        <Route path="/awards/form" element={<Awards />} />
        <Route path="/awards/submit-awards" element={<SubmitAwards />} />
        <Route path="/publications/form" element={<Publications />} />
        <Route path="/publications/submit-pub" element={<SubmitPub />} />
        <Route path="/languages/form" element={<Languages />} />
        <Route path="/languages/submit-lang" element={<SubmitLang />} />
        <Route path="/skills/skillsinput" element={<Skills />} />
        <Route path="/skills/submit-skills" element={<SubmitSkills />} />
        //ROUTES OF COMPANY
        <Route path="/registerAsCompany" element={<CompanySignUp />} />
        <Route path="/loginAsCompany" element={<LoginAsCompany />} />
        <Route path="/CforgetPassword" element={<CForgetPassword />} />
        <Route path="/CsetNewPassword/:id" element={<CSetPassword />} />
        <Route path="/company" element={<CompanyHome />} />
        <Route path="/postjobs" element={<Jobs />} />
        <Route path="/editjob/:jobID" element={<EditJob />} />
        <Route path="/compprofile" element={<Profile />} />
        <Route path="/allapplicants" element={<Applicants />} />
        <Route path="/joblistings" element={<Listings />} />
        <Route path="/companydashboard" element={<CompanyDashboard />} />
        <Route path="/managehiring" element={<ManageHiring />} />


        <Route path="/company/createaccount" element={<CreateAcount />} />
        <Route path="/company/jobbasics" element={<JobBasics />} />
        <Route path="/company/techdetail" element={<TechnologyDetail />} />
        <Route path="/company/paybenefits" element={<PayBenefits />} />
        <Route path="/company/setpreferences" element={<SetPreferences />} />
      </Routes>
    </Router>
  );
};

export default App;
