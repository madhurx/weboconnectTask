const { Follow, User } = require('../models');

const followUser = async (req, res) => {
    const { userId } = req.user;
    const { followingId } = req.body;
    try {
        if (userId === followingId) {
            return res.status(400).json({ message: 'You cannot follow yourself' });
        }

        const existingFollow = await Follow.findOne({ where: { followerId: userId, followingId } });
        if (existingFollow) {
            return res.status(400).json({ message: 'You are already following this user' });
        }

        const follow = await Follow.create({ followerId: userId, followingId });
        res.status(201).json(follow);
    } catch (error) {
        res.status(500).json({ message: 'Error following user' });
    }
};

module.exports = { followUser };
