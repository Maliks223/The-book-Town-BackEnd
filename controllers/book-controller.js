import Book from "../model/Book";
import User from "../model/User";


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

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    res.status(404).json({ message: "no book found" });
  }
  return res.status(200).json({ book });
};

export const addBook = async (req, res, next) => {
  const { title, author, description, image, pdf, category, isAvailable } =
    req.body;
  let book = new Book({
    title,
    author,
    description,
    image,
    pdf,
    category,
    isAvailable,
  });
  try {
    await book.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ book });
};

export const updateBook = (req, res, next) => {
  const newId = req.params.id;
  Book.findByIdAndUpdate(newId, req.body, { new: true }, (err, Book) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({ Book });
  });
};

export const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Book not Found" });
  }
  return res.status(200).json({ message: "Book Deleted" });
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBooks;
  try {
    userBooks = await User.findById(userId).populate("books");
  } catch (err) {
    return console.log(err);
  }
    if (!userBooks) {
      return res
        .status(400)
        .json({ message: "Unable to find User by this ID" });
    }

  if (!userBooks) {
    return res.status(404).json({ message: "no Book founds" });
  }
  return res.status(200).json({ books: userBooks });
};
