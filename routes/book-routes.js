import express from "express";
import { getAllBooks, addBook, deleteBook, getIdBook } from "../controllers/book-controller";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getIdBook);
bookRouter.post("/add", addBook);
bookRouter.put("/update");
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
