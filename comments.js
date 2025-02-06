// Create web server
// 1. Load express
// 2. Create an express app
// 3. Create a route to get all comments
// 4. Run the server

// 1. Load express
const express = require('express');

// 2. Create an express app
const app = express();

// 3. Create a route to get all comments
app.get('/comments', (req, res) => {
  res.send('GET /comments route');
});

// 4. Run the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with the following command:
// node comments.js

// Open the browser and go to http://localhost:3000/comments
// You should see the following message: GET /comments route