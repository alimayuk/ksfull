const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    category: String,
    siteLink: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
