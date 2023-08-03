import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profileImage: String,
  forgetPasswordAuthToken: String,
  jobs: [
    {
      fullName: String,
      email: String,
      jobTitle: String,
      phoneNumber: String,
      coverLetter: String,
      Files: String,
    },
  ],
  phNo: String,
  address: String,
  country: String,
  city: String,
  zipCode: Number,
  linkednLink: String,
  twitterLink: String,
  skills: {
    type: [String],
  },
});

export const User = mongoose.model("User", userSchema);
