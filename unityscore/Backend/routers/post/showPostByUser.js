const express = require("express");
const router = express.Router();

// Middleware
const userVerification = require("../../middleware/userVerification.js");

//  schema
const Post = require("../../models/post_schema.js");

// Success Varaible
let success = false;
router.get("/showPostByUser", userVerification, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id }).sort({ updatedAt: -1 });

    // res.send(new_note);
    success = true;
    res.json({ msg: "All Posts Are Here", posts, success });
  } catch (error) {
    res.json({ msg: error.message, success });
  }
});

module.exports = router;