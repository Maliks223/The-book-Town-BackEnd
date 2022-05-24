import express from "express";
import {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,
  getByUserId,
  // lendBook,
} from "../controllers/book-controller";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getById);
bookRouter.post("/add", addBook);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.get("/user/:id", getByUserId);

export default bookRouter;
