import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routes/admin-routes";
import bookRouter from "./routes/book-routes";
import controlFRouter from "./routes/controlF-routes";
import userRouter from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/books", bookRouter);
app.use("/user", userRouter);
app.use("/control", controlFRouter);
app.use("/admin", adminRouter);

mongoose
  .connect(
    "mongodb+srv://wissam:ZV7UqNrLekMetEi9@books.qc0ai.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3002))
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
