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


// Success Varaible
let success=false;
router.post(
  "/:postId/likePost",
  userVerification,
  async (req, res) => {
    try {
        let post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ msg: "Post Not Found", success });
        }
      
        const postId = req.params.postId;
        const userId = req.user.id;
      
        // Check if the post exists
      
        if (!post) {
          res.status(404);
          throw new Error('Post not found');
        }
      
        // Check if the user has already liked the post
        const alreadyLiked = await Like.findOne({ userId: userId, postId: postId });
        if (alreadyLiked) {
        //   throw new Error('Post already liked');
        return res.json({ msg: "Post already liked", success });
        }
        // Create a new like
  const like = new Like({
    userId,
    postId
  });

  await like.save();

  // Add the like to the post's likes array
  post.likesId.push(like._id);
  await post.save();
  success=true;
  res.status(201).json({ msg: 'Post liked' });
    } catch (error) {
      res.json({ msg: error.message,success });
    }
  }
);

module.exports = router;
