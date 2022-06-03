import express from "express";
// import upload from "../middleware/fileUpload";
import {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,

  // getByUserId,
  // lendBook,
} from "../controllers/book-controller";
import { protect } from "../middleware/auth";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getById);
bookRouter.post("/add", protect, addBook);
bookRouter.put("/update/:id", protect, updateBook);
bookRouter.delete("/delete/:id", protect, deleteBook);
// bookRouter.get("/user/:id", getByUserId);

export default bookRouter;

// bookRouter.post("/add", upload.single("image"), addBook);
// bookRouter.put("/update/:id", upload.single("image"), updateBook);
