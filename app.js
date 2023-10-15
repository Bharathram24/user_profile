const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Simulated database for storing user data
const users = [];

// Middleware for authentication
app.use((req, res, next) => {
  // Implement your authentication logic here.
  // For simplicity, let's assume there's an 'auth' header with a secret token.
  const authToken = req.headers['auth'];
  if (authToken !== 'your_secret_token') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
});

// API endpoints
app.get('/details', (req, res) => {
  const { user_id } = req.query;
  const user = users.find((u) => u.id === user_id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.put('/update', (req, res) => {
  const { new_details_of_user } = req.body;
  const userIndex = users.findIndex((u) => u.id === new_details_of_user.id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = new_details_of_user;
  res.json({ message: 'User updated successfully' });
});

app.get('/image', (req, res) => {
  const { user_id } = req.query;
  const user = users.find((u) => u.id === user_id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Replace 'user_image' with the actual image data.
  const user_image = user.user_image;
  res.json({ user_image });
});

app.post('/insert', (req, res) => {
  const { user_details } = req.body;
  users.push(user_details);
  res.json({ message: 'User inserted successfully' });
});

app.delete('/delete', (req, res) => {
  const { user_id } = req.params;
  const userIndex = users.findIndex((u) => u.id === user_id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
