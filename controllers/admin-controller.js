import Admin from "../model/Admin";
import bcrypt from "bcryptjs";

export const getAdmin = async (req, res, next) => {
  let admin;
  try {
    admin = await Admin.find();
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return res.status(404).json({ message: "no admin found" });
  }
  return res.status(200).json({ admin });
};

export const signup = async (req, res, next) => {
  const { name, password, email } = req.body;

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Admin already exist! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const admin = new Admin({
    name,
    password: hashedPassword,
    email,
  });
  try {
    await admin.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ admin });
};

export const login = async (req, res, next) => {
  const { name, password } = req.body;
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (!existingAdmin) {
    return res.status(404).json({ message: "Couldnt Find Admin By This Name" });
  }
  const isPasswordCorrect = bcrypt.compareSync(
    password,
    existingAdmin.password
  );
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Successfull" });
};
