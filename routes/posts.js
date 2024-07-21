const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post
router.post('/', postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a single post
router.get('/:postId', postController.getPostById);

// Update a post
router.put('/:postId', postController.updatePost);

// Delete a post
router.delete('/:postId', postController.deletePost);

router.get('/category/:category', postController.getPostsByCategory);

module.exports = router;
