const express = require('express');
const router = express.Router();

// const { register, login, getMe } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { signup, login, getMe ,one ,logout} = require('../controllers/authController');

// Signup route
router.post('/register', signup);

// Login route
router.post('/login', login);

// Get user profile route (protected)
router.get('/me', authMiddleware,getMe);

router.post('/logout', logout);

router.get('/one',one);

module.exports = router;