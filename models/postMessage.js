import mongoose from "mongoose";

const postScheme = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  comments: { type: [String], default: [] },
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var postMessage = mongoose.model('PostMessage', postScheme);
export default postMessage;