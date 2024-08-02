const { Post, User, Like } = require('../models');

const createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = await Post.create({ content, userId: req.user.userId });
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error creating post' });
  }
};

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.findAll({
      offset: (page - 1) * limit,
      limit: parseInt(limit),
      include: [
        { model: User, as: 'author', attributes: ['username'] },
        { model: Like, as: 'postLikes' }
      ],
    });
    const totalPages = await Post.count()
    res.status(200).json({
      posts,
      totalPages: Math.ceil(totalPages / 10)

    });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: 'Error retrieving posts' });
  }
};

const likePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const like = await Like.create({ userId: req.user.userId, postId });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ message: 'Error liking post' });
  }
};

module.exports = { createPost, getPosts, likePost };
