import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/book-routes";

const app = express();
app.use(express.json());
app.use("/books", bookRouter);

mongoose
  .connect(
    "mongodb+srv://wissam:ZV7UqNrLekMetEi9@books.qc0ai.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8000))
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));