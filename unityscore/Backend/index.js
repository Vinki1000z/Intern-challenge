const express = require("express");
const app = express();
const port = 5000;

// connecting the db
const connect = require("./db.js");
connect();

//  Point 1. add this
// Middleware to parse JSON bodies
app.use(express.json());
//  use routers

//  1 Authentication

// 1.1 SingUp
app.use("/api/auth", require("./routers/auth/singUp.js"));

//  1.2 Google User Authentication
app.use("/api/auth",require("./routers/auth/googleAuth.js"))

//  1.3 Login
app.use("/api/auth",require("./routers/auth/logIn.js"))

//  1.4 UserVerification
app.use("/api/auth",require("./routers/auth/userVerification.js"))

//  1.5 For logout (Do it in the last)
// app.use("/api/auth",require("./routers/auth/logOut.js"))

// 2 Post

// 2.1 Create a new post
app.use('/api/post', require("./routers/post/createPost.js"));

// Get all posts
// router.get('/api/post', getPosts);

// Get a single post by ID
// router.get('/api/post', getPostById);

// Update a post by ID
// router.put('/api/post', protect, updatePost);

// Delete a post by ID
// router.delete('/api/post', protect, deletePost);

// Create a new comment on a post
// router.post('/api/post', protect, createComment);

// Get comments for a post
// router.get('/api/post', getComments);

// Like a post
// router.post('/api/post', protect, likePost);

// Unlike a post
// router.post('/api/post', protect, unlikePost);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
