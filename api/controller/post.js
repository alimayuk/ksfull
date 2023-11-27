const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// create post
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get post
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all post
const getAllPost = async (req, res) => {
  try {
    let posts;
    posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE POST
const updatePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.name === req.body.name) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

// delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found");
    }

    const currentUser = req.currentUser;
    if (post.username === currentUser.username) {
      try {
        await post.deleteOne();
        return res.status(200).json("Post has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("You can only delete your own post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { createPost, getPost, getAllPost, deletePost,updatePost };
