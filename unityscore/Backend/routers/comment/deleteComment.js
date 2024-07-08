const express = require("express");
const router = express.Router();
// models

// Middleware
const userVerification = require("../../middleware/userVerification.js");

//  schema
const Post = require("../../models/post_schema.js");
const Comment = require("../../models/comment_schema.js");

// Success Varaible
let success = false;
router.delete("/:postId/deleteComment/:commentId", userVerification, async (req, res) => {
  try {
    let post = await Post.findById(req.params.postId);
    if (!post) {
      return res.json({ msg: "Post Not Found", success });
    }

    const commentId = req.params.commentId;
    const userId = req.user.id;
    
    const comment = await Comment.findById(commentId);
    
    // Check if the comment exists
    if (!comment) {
        return res.json({msg:"Comment not found",success});
    }

    // Check if the user is the owner of the comment or the post
    // both the comment owner and the post owner have permission to delete the comment
    if (
      comment.userId.toString() !== userId.toString() &&
      post.userId.toString() !== userId.toString()
    ) {
        return res.json({msg:"User not authorized",success})
    }

    // Remove the comment from the post's comments array
    post.commentsId.pull(commentId);
    await post.save();

    // Remove the comment document from the Comment collection
    await Comment.findByIdAndDelete(commentId);

    success = true;
    res.json({ msg: "Comment deleted", success });
  } catch (error) {
    res.json({ msg: error.message, success });
  }
});

module.exports = router;
