import Job from "../models/Job.js";

export const applyForJob = async (req, res) => {
  try {
    const userID = req.user;
    const jobID = req.params.jobID;

    const job = await Job.findById(jobID, "applications");
    console.log(job);

    for (let i = 0; i < job.applications.length; i++) {
      var id = job.applications[i].user;
      if (id == userID) {
        res.status(400).json({
          error: "Already Applied for this Job",
        });
        return;
      }
    }

    job.applications.push({
      user: userID,
    });

    await job.save();

    return res.status(201).json({
      message: "Applied for Job Successfully",
    });
  } catch (err) {
    console.error("Error Applying Job:", err);
    return res.status(400).json({
      error: "An error occurred while Applying for Job",
    });
  }
};

export const postJob = async (req, res) => {
  try {
    const data = req.body;
    const companyID = req.company; // it is set from middleware
    if (
      !data.jobTitle ||
      !data.jobType ||
      !data.jobLevel ||
      !data.maxSR ||
      !data.minSR ||
      !data.location ||
      !data.Experience ||
      !data.qualification ||
      !data.applicationDeadline ||
      !data.jobDescription
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.company = companyID;
    const jobObj = new Job(data);
    const job = await jobObj.save();

    return res.status(201).json({
      message: "Job Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Job:", error);
    return res.status(400).json({
      error: "An error occurred while creating Job",
    });
  }
};

// get jobs of a company
export const getJobs = async (req, res) => {
  try {
    const companyID = req.company; // it is set from middleware
    const jobs = await Job.find({ company: companyID }, "-applications");

    return res.status(201).json({
      jobs,
    });
  } catch (error) {
    console.error("Error getting Jobs:", error);
    return res.status(400).json({
      error: "An error occurred while getting Jobs",
    });
  }
};

// get all applicants of a job
export const getApplicantssOfAJob = async (req, res) => {
  try {
    const jobId = req.params.jobID;
    const applicants = await Job.findById(jobId, "applications").populate({
      path: "applications.user",
      model: "User",
      select: "-jobs",
    }); // Select specific user fields

    if (!applicants) {
      console.log("Applicant not found");
      res.status(400).json({ error: "Applicants not found" });
      return;
    }

    res.json(applicants.applications);
  } catch (error) {
    console.error("Error getting Applicants:", error);
    return res.status(400).json({
      error: "An error occurred while getting Applicants",
    });
  }
};

//  get all applicant of a company
export const getAllApplicants = async (req, res) => {
  try {
    const company = req.company;
    const applicants = await Job.find(
      { company: company },
      "applications jobTitle"
    ).populate({
      path: "applications.user",
      model: "User",
      select: "-jobs",
    }); // Select specific user fields

    if (!applicants) {
      console.log("Applicants not found");
      res.status(400).json({ error: "Applicants not found" });
      return;
    }

    var array = [];
    for (let i = 0; i < applicants.length; i++) {
      for (let j = 0; j < applicants[i].applications.length; j++) {
        array.push({
          userID: applicants[i].applications[j].user._id,
          firstName: applicants[i].applications[j].user.firstName,
          appliedDate: applicants[i].applications[j].appliedDate,
          hiringStage: applicants[i].applications[j].hiringStage,
          status: applicants[i].applications[j].status,
          jobID: applicants[i]._id,
          _id: applicants[i].applications[j]._id,
          jobRole: applicants[i].jobTitle,
        });
      }
    }

    res.json({ applicants: array });
  } catch (error) {
    console.error("Error getting Applicants:", error);
    return res.status(400).json({
      error: "An error occurred while getting Applicants",
    });
  }
};

export const changeStage = async (req, res) => {
  try {
    const stage = req.body.stage;
    const company = req.company;
    const jobID = req.params.jobID;
    const applicationID = req.params.appID;

    const jobApplications = await Job.findOne(
      { _id: jobID, company: company },
      "applications"
    );
    for (let i = 0; i < jobApplications.applications.length; i++) {
      if (jobApplications.applications[i]._id == applicationID) {
        jobApplications.applications[i].hiringStage = stage;
      }
    }

    await jobApplications.save();

    res.json({ message: "Change Stage Successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "something wrong happened with changing stage" });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const stage = req.body.stage;
    const company = req.company;
    const jobID = req.params.jobID;
    const applicationID = req.params.appID;

    const jobApplications = await Job.findOne(
      { _id: jobID, company: company },
      "applications"
    );
    for (let i = 0; i < jobApplications.applications.length; i++) {
      if (jobApplications.applications[i]._id == applicationID) {
        jobApplications.applications.splice(i, 1);
        // console.log(jobApplications.applications[i]);
      }
    }

    jobApplications.save();

    res.json({ message: "Application Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "something wrong happened with changing stage" });
  }
};
