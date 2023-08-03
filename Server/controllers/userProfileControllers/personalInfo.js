import { User } from "../../models/User.js";

export const postData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phNo,
      address,
      country,
      city,
      zipCode,
      linkednLink,
      twitterLink,
    } = req.body;
    const userID = req.user;

    if (
      !firstName ||
      !lastName ||
      !phNo ||
      !address ||
      !country ||
      !city ||
      !zipCode ||
      !linkednLink ||
      !twitterLink
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    const user = await User.findById(userID, {
      password: 0,
      jobs: 0,
      forgetPasswordAuthToken: 0,
    });

    user.firstName = firstName;
    user.lastName = lastName;
    user.phNo = phNo;
    user.address = address;
    user.country = country;
    user.city = city;
    user.zipCode = zipCode;
    user.linkednLink = linkednLink;
    user.twitterLink = twitterLink;

    user.save();

    return res.status(201).json({
      message: "Personal Information Added Successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({
      error: "An error occurred while creating Personal Information",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user;
    const user = await User.findById(userID, {
      password: 0,
      jobs: 0,
      forgetPasswordAuthToken: 0,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: "Error while getting Personal Information" });
  }
};

export const postSkills = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user;
    if (!data.skills) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    const user = await User.findById(userID, "skills");

    console.log(user);
    user.skills = data.skills;
    const skills = await user.save();

    res.status(200).json({ message: "Skills Added Successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: "An error occurred while adding Skills" });
  }
};

export const getSkills = async (req, res) => {
  try {
    const userID = req.user;
    const user = await User.findById(userID, "skills");
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: "Error while getting Skills" });
  }
};
