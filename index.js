import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://ZiadMohamed:ZiadMohamed123@cluster0.fpufraa.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000 || process.env.PORT;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Ruuning on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
