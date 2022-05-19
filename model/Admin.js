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
  },
});

export default model = ("Admin", admin);
