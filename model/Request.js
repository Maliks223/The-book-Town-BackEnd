import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userRequest = new Schema({
  book: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
});

export default mongoose.model("Request", userRequest);