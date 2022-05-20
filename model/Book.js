import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
  pdf: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Book", bookSchema);
