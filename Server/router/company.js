import express from "express";
import { verifyCompanyToken } from "../middlewares/middleware.js";

import {
  registerCompany,
  loginCompany,
  ForgetPassword,
  SetPassword,
  setProfile,
  getProfile,
  getDashboardInfo,
  getPieInfo,
  manageHiringGetJobs,
} from "../controllers/company.js";

const router = express.Router();

router.post("/register", registerCompany);
router.post("/login", loginCompany);
router.post("/forgetPassword", ForgetPassword);
router.post("/setPassword", SetPassword);
router.post("/setProfile", verifyCompanyToken, setProfile);
router.get("/getProfile", verifyCompanyToken, getProfile);
router.get("/getDashboard", verifyCompanyToken, getDashboardInfo);
router.get("/getPieInfo", verifyCompanyToken, getPieInfo);
router.get("/manageHiringGetJobs", verifyCompanyToken, manageHiringGetJobs);

export default router;
