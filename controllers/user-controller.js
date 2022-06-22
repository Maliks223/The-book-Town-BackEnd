import User from "../model/User";


export const allRequests = async (req, res, next) => {
  let users;
  try {
    users = await User.find().populate("book");
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no Requests found" });
  }
  return res.status(200).json({ users });
};
//////////////////////////////////////////////////////// for USER ONLY
export const userForm = async (req, res, next) => {
  const { name, email, phone, dateFrom, dateTo, book, isBorrow } = req.body;

  let existingUser = await User.find({ email });
  // console.log("LENGTH: ", existingUser.length);
  try {
    if (existingUser && existingUser.length === 4) {
      return res.status(200).json({
        status: 404,
        message: "You reach your limit of borrowing books",
      });
    }
  } catch (err) {
    return console.log(err);
  }

  const user = new User({
    name,
    email,
    phone,
    dateFrom,
    dateTo,
    book,
    isBorrow: true,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ user });
};
////////////////////////////////////////////////////////
export const deleteRequest = async (req, res, next) => {
  const id = req.params.id;
  let user;

  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "request not Found" });
  }
  return res.status(200).json({ message: "request Deleted" });
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let userBook;
  try {
    userBook = await User.deleteOne({ book: id });
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Requested Deleted" });
};

export const updateUser = (req, res, next) => {
  const newId = req.params.id;
  User.findByIdAndUpdate(newId, req.body, { new: true }, (err, User) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(User);
  });
};

// export const lendRequest = async (req, res, next) => {
//   const { book, user, dateFrom, dateTo } = req.body;
//   let existingUser;
//   try {
//     existingUser = await User.findById(user);
//   } catch (err) {
//     return console.log(err);
//   }
//   let request = new Request({
//     book,
//     user,
//     dateFrom,
//     dateTo,
//   });
//   try {
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     await request.save({ session });
//     existingUser.books.push(book);
//     await existingUser.save({ session });
//     await session.commitTransaction();
//   } catch (err) {
//     return console.log(err);
//   }
//   return res.status(200).json({ request });
// };
