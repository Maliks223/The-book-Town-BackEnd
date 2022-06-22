import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },
  isBorrow:{
    type: Boolean
  }
});

export default mongoose.model("User", userSchema);
