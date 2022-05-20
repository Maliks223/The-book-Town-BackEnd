import mongoose, { model } from "mongoose";

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
});

export default model = ("Admin", admin);