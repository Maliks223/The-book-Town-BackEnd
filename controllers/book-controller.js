import Book from "../model/Book";
import mongoose from 'mongoose';

export const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    return console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "no books found" });
  }
  return res.status(200).json({ books });
};

export const addBook = async (req, res, next) => {
  const { title, author, description, image, pdf, category, isAvailable } =
    req.body;
  const book = new Book({
    title,
    author,
    description,
    image,
    pdf,
    category,
    isAvailable,
  });
  try {
    book.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ book });
};

export const deleteBook = async (req, res, next) => {
  const id = await Book.findByIdAndDelete(req.params.id);

  if (!id)
  return(res.status(404).send("Book not found"));
  return (res.status(200).json({ Book }));
};
