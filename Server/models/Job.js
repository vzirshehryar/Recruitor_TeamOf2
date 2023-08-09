import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  jobTitle: String,
  jobType: String,
  jobLevel: String,
  maxSR: Number,
  minSR: Number,
  location: String,
  Experience: String,
  qualification: String,
  applicationDeadline: String,
  jobDescription: String,
  applications: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      appliedDate: {
        type: Date,
        default: Date.now(),
      },
      hiringStage: {
        type: String,
        default: "In process",
      },
      status: {
        type: String,
        default: "On Going",
      },
      resume: String,
    },
  ],
});

const Job = new mongoose.model("Job", jobSchema);
export default Job;
