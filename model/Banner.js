import mongoose from "mongoose";

const Schema = mongoose.Schema;

const banner = new Schema({
  text: {
    type: String,
  },
});

export default mongoose.model("Banner", banner);
