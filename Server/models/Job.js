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
});

const Job = new mongoose.model("Jobs", jobSchema);
export default Job;
