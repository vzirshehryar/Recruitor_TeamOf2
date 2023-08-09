import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home/index';
import Login from './routes/Auth/Login/index';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './routes/Auth/signUp/index';
import ForgetPassword from './routes/Auth/ForgetPassword/index';
import SetPassword from './routes/Auth/setPassword/index';
import JobFeed from './routes/jobFeed/JobFeed';
import PersonalInfo from './routes/Profile/components/personalinfo';
import Sidenav from './routes/Profile/components/Sidenav';
import Images from './routes/Profile/components/Images';
import PersonalInformation from './routes/Profile/components/Information';
import AddExperiences from './routes/Profile/components/AddExperiences';
import Experiences from './routes/Profile/components/Experiences/Experiences';
import AddEducation from './routes/Profile/components/Education/AddEducation';
import Education from './routes/Profile/components/Education/Education';
import AddCourses from './routes/Profile/components/Courses/AddCourses';
import Courses from './routes/Profile/components/Courses/Courses';
import AddCertifications from './routes/Profile/components/Certifications/AddCertifications';
import Certifications from './routes/Profile/components/Certifications/Certifications';
import AddAwards from './routes/Profile/components/Awards/AddAwards';
import Awards from './routes/Profile/components/Awards/Awards';
import AddPublications from './routes/Profile/components/Publications/AddPublications';
import Publications from './routes/Profile/components/Publications/Publications';
import AddLanguages from './routes/Profile/components/Languages/AddLanguages';
import Languages from './routes/Profile/components/Languages/Languages';
import AddSkills from './routes/Profile/components/Skills/AddSkills';
import SubmitExp from './routes/Profile/components/Experiences/SubmitExp';
import Skills from './routes/Profile/components/Skills/Skills';
import SubmitEdu from './routes/Profile/components/Education/SubmitEdu';
import SubmitCour from './routes/Profile/components/Courses/SubmitCour';
import SubmitCert from './routes/Profile/components/Certifications/SubmitCert';
import SubmitAwards from './routes/Profile/components/Awards/SubmitAwards';
import SubmitPub from './routes/Profile/components/Publications/SubmitPub';
import SubmitLang from './routes/Profile/components/Languages/SubmitLang';
import SubmitSkills from './routes/Profile/components/Skills/SubmitSkills';
import Sidebar from './routes/company/Sidebar';
import Jobs from './routes/company/Dashboard/PostJobs/Jobs';
import Profile from './routes/company/Dashboard/CompProfile/Profile';
import Applicants from './routes/company/Dashboard/AllApplicants/Applicants';
import Listings from './routes/company/Dashboard/JobListings/Listings';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/setNewPassword/:id" element={<SetPassword />} />
        <Route path="/jobFeed" element={<ProtectedRoute><JobFeed /></ProtectedRoute>} />
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/experiences" element={<AddExperiences />} />
        <Route path="/experiences/form" element={<Experiences />} />
        <Route path="/experiences/submit-exp" element={<SubmitExp />} />
        <Route path="/education" element={<AddEducation />} />
        <Route path="/education/form" element={<Education />} />
        <Route path="/education/submit-edu" element={<SubmitEdu />} />
        <Route path="/courses" element={<AddCourses />} />
        <Route path="/courses/form" element={<Courses />} />
        <Route path="/courses/submit-cour" element={<SubmitCour />} />
        <Route path="/certifications" element={<AddCertifications />} />
        <Route path="/certifications/form" element={<Certifications />} />
        <Route path="/certifications/submit-cert" element={<SubmitCert />} />
        <Route path="/awards" element={<AddAwards />} />
        <Route path="/awards/form" element={<Awards />} />
        <Route path="/awards/submit-awards" element={<SubmitAwards />} />
        <Route path="/publications" element={<AddPublications />} />
        <Route path="/publications/form" element={<Publications />} />
        <Route path="/publications/submit-pub" element={<SubmitPub />} />
        <Route path="/languages" element={<AddLanguages />} />
        <Route path="/languages/form" element={<Languages />} />
        <Route path="/languages/submit-lang" element={<SubmitLang />} />
        <Route path="/skills" element={<AddSkills />} />
        <Route path="/skills/skillsinput" element={<Skills />} />
        <Route path="/skills/submit-skills" element={<SubmitSkills />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/postjobs" element={<Jobs />} />
        <Route path="/compprofile" element={<Profile />} />
        <Route path="/allapplicants" element={<Applicants />} />
        <Route path="/joblistings" element={<Listings />} />
      </Routes>
    </Router>
  );
};

export default App;
