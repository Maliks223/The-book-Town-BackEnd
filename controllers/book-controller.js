import Book from "../model/Book";
import mongoose from 'mongoose';

//Get all books
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

//add new book
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
//delete a book by Id
export const deleteBook = async (req, res, next) => {
  const id = await Book.findByIdAndDelete(req.params.id);

  if (!id)
  return(res.status(404).send("Book not found"));
  return (res.status(200).json({ Book }));
};

//Get a book by Id
export const getIdBook = async (req, res, next) => {
  const id = await Book.findById(req.params.id);

  if (!id)
  return(res.status(404).send("Book not found"));
  return (res.status(200).json({ id }));
}

