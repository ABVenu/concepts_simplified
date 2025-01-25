const express = require('express');
const Todo = require('../models/todo');
const User = require('../models/users');
const router = express.Router();

// Create a new todo
router.post('/', async (req, res) => {
    const { title, userId, completed } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const newTodo = new Todo({ title, userId, completed });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all todos for a specific user
router.get('/:userId', async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.params.userId });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
