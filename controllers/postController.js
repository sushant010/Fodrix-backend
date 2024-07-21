const Post = require('../model/Post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
  };

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching posts.' });
  }
};

// Get a single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      res.status(404).json({ message: 'Post not found.' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the post.' });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
        new: true,
      });
      if (!updatedPost) {
        res.status(404).json({ message: 'Post not found.' });
        return;
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the post.' });
    }
  };

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(req.params.postId);
    if (!deletedPost) {
      res.status(404).json({ message: 'Post not found.' });
      return;
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post.' });
  }
};

// Get posts by category
exports.getPostsByCategory = async (req, res) => {
    try {
      const category = req.params.category;
      const posts = await Post.find({ category });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching posts by category.' });
    }
  };
  
