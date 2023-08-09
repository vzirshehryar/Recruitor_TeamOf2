import express from "express";

import { verifyJWT, verifyCompanyToken } from "../middlewares/middleware.js";
import {
  applyForJob,
  getJobs,
  postJob,
  getApplicantssOfAJob,
  getAllApplicants,
  changeStage,
  deleteApplication,
} from "../controllers/job.js";

const router = express.Router();

router.post("/postJob", verifyCompanyToken, postJob);
router.post("/apply/:jobID", verifyJWT, applyForJob);
//  get jobs of a company
router.get("/getJobs", verifyCompanyToken, getJobs);
router.get(
  "/getApplicantssOfAJob/:jobID",
  verifyCompanyToken,
  getApplicantssOfAJob
);
router.get("/getAllApplicants", verifyCompanyToken, getAllApplicants);
router.put("/changeStage/:jobID/:appID", verifyCompanyToken, changeStage);
router.delete(
  "/deleteApplication/:jobID/:appID",
  verifyCompanyToken,
  deleteApplication
);

export default router;
