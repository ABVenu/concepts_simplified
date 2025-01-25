const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://mongodb:27017/todos-app';  // Docker container name

// Middleware
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("this is test route")
})
// Routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
