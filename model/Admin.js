import mongoose from "mongoose";

const Schema = mongoose.Schema;

const admin = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Admin", admin);
