import Application from "../models/Applicantion";

const applyForJob = async (req, res) => {
  const userID = req.user;
  const jobID = req.body.jobID;

  const application = new Application({
    job: jobID,
    user: userID,
  });

  application.save();
};
