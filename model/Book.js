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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isAvailable: {
    type: Boolean,
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
});

export default mongoose.model("Book", bookSchema);
