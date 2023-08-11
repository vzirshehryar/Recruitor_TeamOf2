import Company from "../models/Company.js";
import Job from "../models/Job.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateCompanyToken } from "../middlewares/middleware.js";

export const registerCompany = async (req, res) => {
  const { email, password } = req.body;
  let data;

  try {
    // SEE IF USER ALREADY EXISTS
    let company = await Company.findOne({ email });

    // RETURN ERROR IF ALREADY EXISTS
    if (company) {
      res.status(200).json({ success: false, msg: "User already exists" });
      return;
    }

    // MAKING NEW USER
    company = new Company({
      email,
      password,
    });

    // ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(10);
    company.password = await bcrypt.hash(password, salt); //convert into hashing algorithm

    // SAVING DATA TO MONGO DB
    await company.save();

    // CREATING JWT FOR USER GIVING TO THE CLIENT
    const token = generateCompanyToken(company._id);
    data = { success: true, token: token, user: company };
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  let data;

  try {
    // SEE IF USER EXISTS
    let company = await Company.findOne({ email }, "email password");

    // RETURN ERROR IF USER NOT EXISTS
    if (!company) {
      return res
        .status(200)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    // DECRYPTING PASSWORD AND MATCHING IT
    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    //deleting password before sending to client
    company = company.toObject();
    delete company.password;

    // CREATING JWT FOR USER GIVING TO THE CLIENT
    const token = generateCompanyToken(company._id);
    data = { success: true, token: token, user: company };
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const setProfile = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const companyID = req.company; // it is set from middleware
    if (
      !data.name ||
      !data.teamSize ||
      !data.phNo ||
      !data.website ||
      !data.country ||
      !data.city ||
      !data.address ||
      !data.about
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    const company = await Company.findById(companyID);
    company.name = data.name;
    company.teamSize = data.teamSize;
    company.phNo = data.phNo;
    company.website = data.website;
    company.country = data.country;
    company.city = data.city;
    company.address = data.address;
    company.about = data.about;
    company.save();

    return res.status(201).json({
      message: "Company profile Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Company Profile:", error);
    return res.status(400).json({
      error: "An error occurred while creating Company Profile",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const companyID = req.company; // it is set from middleware
    const company = await Company.findById(companyID, "-password");

    return res.status(201).json({
      company,
    });
  } catch (error) {
    console.error("Error getting Company Profile:", error);
    return res.status(400).json({
      error: "An error occurred while getting Company Profile",
    });
  }
};

export const getDashboardInfo = async (req, res) => {
  try {
    const companyId = req.company; // Company ID from the middleware
    const companyJobs = await Job.find({ company: companyId });

    let jobPosted = companyJobs.length ? companyJobs.length : 0;
    let applied = 0;
    const jobs = [];

    companyJobs.forEach((job) => {
      applied = job.applications.length; // Sum up applications across all jobs
      job = job.toObject();
      delete job.applications;
      jobs.push(job);
    });

    const jobInfo = {
      jobPosted,
      applied,
      jobs,
    };

    return res.status(200).json(jobInfo);
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
