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
  books: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
