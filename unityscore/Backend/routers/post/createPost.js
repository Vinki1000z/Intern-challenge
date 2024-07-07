const express = require("express");
const router = express.Router();
// models

// Middleware
const userVerification = require("../../middleware/userVerification.js");

// importing express validators
const { body, validationResult } = require("express-validator");

//  schema
const Post = require("../../models/post_schema.js");

// Success Varaible
let success=false;
router.post(
  "/createPost",
  userVerification,
  [
    // Validate content
    body("content")
      .isLength({ min: 4 })
      .withMessage("Title must be at least 4 characters long"),

    // Validate title
    body("title")
      .isLength({ min: 4 })
      .withMessage("Title must be at least 8 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { content, title } = req.body;
      const post = new Post({
        title,
        content,
        userId: req.user.id,
      });
      await post.save();
      // res.send(new_note);
      success=true;
      res.json({ msg: "Note Created Successfully", success});
    } catch (error) {
      res.json({ msg: error.message,success });
    }
  }
);

module.exports = router;
