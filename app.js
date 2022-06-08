import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routes/admin-routes";
import bookRouter from "./routes/book-routes";
import controlFRouter from "./routes/controlF-routes";
import userRouter from "./routes/user-routes";
// import upload from "./middleware/fileUpload";
import cors from "cors";
import bodyParser from "body-parser";
import bannerRouter from "./routes/banner-route";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static("./public"));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/books", bookRouter);
app.use("/user", userRouter);
app.use("/control", controlFRouter);
app.use("/admin", adminRouter);
app.use("/banner", bannerRouter);

mongoose
  .connect(
    "mongodb+srv://wissam:ZV7UqNrLekMetEi9@books.qc0ai.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3002))
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
