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
  getAllJobs,
  deleteJob,
  getJob,
  editJob,
} from "../controllers/job.js";

const router = express.Router();

router.get("/getAllJobs", getAllJobs);
router.post("/postJob", verifyCompanyToken, postJob);
router.post("/editJob/:jobID", verifyCompanyToken, editJob);
router.post("/apply/:jobID", verifyJWT, applyForJob);
router.get("/getJob/:jobID", verifyCompanyToken, getJob);
router.get("/deleteJob/:jobID", verifyCompanyToken, deleteJob);
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
