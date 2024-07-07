const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  }
}, {
  timestamps: true
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
