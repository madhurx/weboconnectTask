const express = require('express');
const { createPost, getPosts, likePost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.post('/:postId/like', authMiddleware, likePost);

module.exports = router;
