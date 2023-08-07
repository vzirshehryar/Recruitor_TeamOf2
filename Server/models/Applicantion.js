import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  appliedDate: {
    type: Date,
    default: Date.now(),
  },
  hiringStage: "Pending",
  status: "On Going",
  resume: String,

  // Other application-related fields
});

const Application = mongoose.model("Applications", applicationSchema);

export default Application;
