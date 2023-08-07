import express from "express";
import { verifyJWT } from "../middlewares/middleware.js";

import { applyForJob } from "../controllers/application.js";

const router = express.Router();

router.post("/apply", verifyJWT, applyForJob);

export default router;
