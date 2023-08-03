import Language from "../../models/Language.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware

    if (
      !data.language ||
      !data.speakingLevel ||
      !data.listeningLevel ||
      !data.writingLevel ||
      !data.readingLevel
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const languageObj = new Language(data);
    const language = await languageObj.save();

    return res.status(201).json({
      message: "Language Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Language:", error);
    return res.status(400).json({
      error: "An error occurred while creating Language",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const languages = await Language.find({ user: userID });

    return res.status(201).json({
      languages,
    });
  } catch (error) {
    console.error("Error getting Languages:", error);
    return res.status(400).json({
      error: "An error occurred while getting Languages",
    });
  }
};
