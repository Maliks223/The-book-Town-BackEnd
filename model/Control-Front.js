import mongoose from "mongoose";

const Schema = mongoose.Schema;

const controlFront = new Schema({
  aboutUS: {
    type: String,
  },
  banner: {
    type: String,
  },
});

export default mongoose.model("Controlf", controlFront);