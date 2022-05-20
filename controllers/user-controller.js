import User from "../model/User";

export const allRequests = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no Requests found" });
  }
  return res.status(200).json({ users });
};
//////////////////////////////////////////////////////// for USER ONLY
export const lendRequest = async (req, res, next) => {
  const { name, email, phone, books } = req.body;
  const user = new User({
    name,
    email,
    phone,
    books: [],
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
