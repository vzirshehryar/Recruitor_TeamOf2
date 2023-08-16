import JobExperience from "../../models/userModels/JobExperience.js";
import { User } from "../../models/User.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware

    const checkForProgress = await JobExperience.find({ user: userID });
    if (checkForProgress.length === 0) {
      const user = await User.findById(userID);
      user.profileCompletion += 10;
      await user.save();
    }

    if (
      !data.jobTitle ||
      !data.employmentType ||
      !data.industry ||
      !data.startDate ||
      !data.currentlyWorking ||
      !data.company ||
      !data.companyWebsite ||
      !data.country ||
      !data.state ||
      !data.city ||
      !data.description
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const jobExperience = new JobExperience(data);
    const job = await jobExperience.save();

    return res.status(201).json({
      message: "Job Experience Added Successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({
      error: "An error occurred while creating Job Experience",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const jobExperience = await JobExperience.find({ user: userID });

    return res.status(201).json({
      jobs: jobExperience,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({
      error: "An error occurred while creating Job Experience",
    });
  }
};
