const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  }, 
  googleId: { type: String, unique: true, sparse: true }, // Sparse index allows multiple null values

  date: { type: Date, default: Date.now },
  isGoogleUser: { type: Boolean, default: false }, // Flag to indicate Google auth
  scores: {
    type: Number,
    default: 0,
  },
  achievements: [
    {
      type: String,
    },
  ],


});

userSchema.pre("save", function (next) {
  if (!this.googleId && !this.password) {
    next(new Error("Either password or googleId must be provided"));
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
