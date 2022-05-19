import express from "express";
import { getAllBooks, addBook } from "../controllers/book-controller";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id");
bookRouter.post("/add", addBook);
bookRouter.put("/update");
bookRouter.delete("/delete");

export default bookRouter;
