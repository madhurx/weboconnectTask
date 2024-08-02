const express = require('express');
const { followUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/follow', authMiddleware, followUser);

module.exports = router;
