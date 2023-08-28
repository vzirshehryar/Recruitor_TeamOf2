import express from "express";
import {
  RegisterUser,
  loginUser,
  ApplyJob,
  ForgetPassword,
  SetPassword,
  SendEmail,
  uploadResume,
} from "../controllers/index.js";

import { verifyJWT } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.post("/applyJob", ApplyJob);
router.post("/forgetPassword", ForgetPassword);
router.post("/setPassword", SetPassword);
router.post("/sendEmail", SendEmail);
router.post("/uploadresume", verifyJWT, uploadResume);

// HERE ARE THE ROUTES OF PROFILE INFORMATION RELATED ROUTERS WHICH ARE INSIDE /userProfileRouter FOLDER
import PersonalInfoRoutes from "./userProfileRouter/personalInfo.js";
import JobExperienceRoutes from "./userProfileRouter/jobExperienceRouter.js";
import EducationRoutes from "./userProfileRouter/educationRouter.js";
import CourseRoutes from "./userProfileRouter/courseRouter.js";
import CertificateRoutes from "./userProfileRouter/certificateRouter.js";
import AwardRoutes from "./userProfileRouter/awardsRouter.js";
import PublicationRoutes from "./userProfileRouter/publicationsRouter.js";
import LanguageRoutes from "./userProfileRouter/languageRouter.js";

router.use("/personalInfo", verifyJWT, PersonalInfoRoutes);
router.use("/jobExperience", verifyJWT, JobExperienceRoutes);
router.use("/education", verifyJWT, EducationRoutes);
router.use("/course", verifyJWT, CourseRoutes);
router.use("/certificate", verifyJWT, CertificateRoutes);
router.use("/award", verifyJWT, AwardRoutes);
router.use("/publication", verifyJWT, PublicationRoutes);
router.use("/language", verifyJWT, LanguageRoutes);

export default router;
