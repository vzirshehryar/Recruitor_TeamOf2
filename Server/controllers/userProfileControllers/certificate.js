import Certificate from "../../models/Certificate.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware

    if (
      !data.courseTitle ||
      !data.organization ||
      !data.issueDate ||
      !data.expiryDate ||
      !data.desrciption
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const certificateObj = new Certificate(data);
    const certificate = await certificateObj.save();

    return res.status(201).json({
      message: "Certificate Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Certificate:", error);
    return res.status(400).json({
      error: "An error occurred while creating Certificate",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const certificate = await Certificate.find({ user: userID });

    return res.status(201).json({
      certificate,
    });
  } catch (error) {
    console.error("Error creating Certificate:", error);
    return res.status(400).json({
      error: "An error occurred while creating Certificate",
    });
  }
};
