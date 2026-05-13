import mongoose from "mongoose";

const topbarSchema = new mongoose.Schema(
  {
    offerText: String,

    marqueeText1: String,

    marqueeText2: String,

    buttonText: String,
  },
  { timestamps: true }
);

export default mongoose.model("Topbar", topbarSchema);