const express = require("express");
const router = express.Router();
// models

// Middleware
const userVerification = require("../../middleware/userVerification.js");

// importing express validators
const { body, validationResult } = require("express-validator");


//  schema
const Post = require("../../models/post_schema.js");
const Comment = require("../../models/comment_schema.js");


// Success Varaible
let success=false;
router.post(
  "/:postId/createComment",
  userVerification,
  [
    // Validate content
    body("content")
      .isLength({ min: 1 })
      .withMessage("Comment must be at least 1 characters long")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        let post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ msg: "Post Not Found", success });
        }
      const { content } = req.body;
      const  comment= new Comment({
        userId:req.user.id,
        postId:req.params.postId,
        content
      });
      await comment.save();
      post.commentsId.push(comment._id);
      await post.save();
      success=true;
      res.json({ msg: "Comment on Post", success});
    } catch (error) {
      res.json({ msg: error.message,success });
    }
  }
);

module.exports = router;
