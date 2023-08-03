import Publication from "../../models/Publications.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware

    if (
      !data.publicationTitle ||
      !data.publishedBy ||
      !data.publicationURL ||
      !data.publishedDate ||
      !data.description
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const publicationObj = new Publication(data);
    const publication = await publicationObj.save();

    return res.status(201).json({
      message: "Publication Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Publication:", error);
    return res.status(400).json({
      error: "An error occurred while creating Publication",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const publications = await Publication.find({ user: userID });

    return res.status(201).json({
      publications,
    });
  } catch (error) {
    console.error("Error getting Publication:", error);
    return res.status(400).json({
      error: "An error occurred while getting Publications",
    });
  }
};
