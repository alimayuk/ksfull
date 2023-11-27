const express = require("express");
const { createPost, getPost, getAllPost, deletePost, updatePost } = require("../controller/post");
const verifyToken = require("../middleware/auth")
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.get("/",getAllPost);
router.put("/:id",verifyToken, updatePost);
router.delete("/:id",verifyToken, deletePost);

module.exports = router;
