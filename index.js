import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Server/config/db.js";
import path from "path";
import UserRoutes from "./Server/router/users.js";
import AdminRoutes from "./Server/router/admin.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));

connectDB();

app.use("/user", UserRoutes);
// app.use('/admin', AdminRoutes);
// Serve static assets in production
// app.get("/", (req, res) => {
//   res.send("Hello it is Recrutior");
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(__dirname, "client", "build", "index.html");
  });
}

app.listen(PORT, console.log(`Server running on port ${PORT}`));
