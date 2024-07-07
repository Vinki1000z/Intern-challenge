const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  commentsId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  likesId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Like'
  }],
  likeCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
