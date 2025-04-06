const express = require('express');
const router = express.Router();

// const { register, login, getMe } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { signup, login, getMe } = require('../controllers/authController');

// Signup route
router.post('/register', signup);

// Login route
router.post('/login', login);

// Get user profile route (protected)
router.get('/me', authMiddleware,getMe);

module.exports = router;