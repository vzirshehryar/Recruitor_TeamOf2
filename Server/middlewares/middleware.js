import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  //   console.log("I am in middle ware");

  const secretKey = process.env.JWToken;
  const token = req.headers["authorization"];

  //   console.log(token);
  //   console.log(secretKey);

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // console.log(user.user.id);
    req.user = user.user.id; // Store the user ID in req.user
    next();
  });
};
