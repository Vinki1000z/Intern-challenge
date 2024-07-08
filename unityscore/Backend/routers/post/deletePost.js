const express = require("express");
const router = express.Router();
// models

// Middleware
const userVerification = require("../../middleware/userVerification.js");

// importing express validators
const { body, validationResult } = require("express-validator");

//  schema
const Post = require("../../models/post_schema.js");
const Like = require("../../models/likes_schema.js");
const Comment = require("../../models/comment_schema.js");

// Success Varaible
let success = false;
router.delete("/deletePost/:postId", userVerification, async (req, res) => {
  try {
    let post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ msg: "Post Not Found", success });
    }
    if (post.userId.toString() !== req.user.id) {
      return res.status(401).json({
        msg: "You are not allowed to delete this Post",
        success,
      });
    }
    // Delete associated likes and comments
    await Like.deleteMany({ postId: req.params.postId });
    await Comment.deleteMany({ postId: req.params.postId });

    // Delete the post
    await post.deleteOne();

    success = true;
    res.json({ msg: "Post removed", success });
  } catch (error) {
    res.json({ msg: error.message, success });
  }
});

module.exports = router;
