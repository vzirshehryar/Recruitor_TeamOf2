import Education from "../../models/userModels/Education.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware

    if (
      !data.school ||
      !data.degree ||
      !data.fieldOfStudy ||
      !data.startYear ||
      !data.startMonth ||
      !data.endYear ||
      !data.endMonth ||
      !data.description
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const education = new Education(data);
    const edu = await education.save();

    return res.status(201).json({
      message: "Education Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Education:", error);
    return res.status(400).json({
      error: "An error occurred while creating Education",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const educations = await Education.find({ user: userID });

    return res.status(201).json({
      educations: educations,
    });
  } catch (error) {
    console.error("Error creating Education:", error);
    return res.status(400).json({
      error: "An error occurred while creating Education",
    });
  }
};
