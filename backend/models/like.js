const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

const Like = sequelize.define('Like', {});

Like.belongsTo(User, { as: 'liker', foreignKey: 'userId' });
Like.belongsTo(Post, { as: 'likedPost', foreignKey: 'postId' });

module.exports = Like;
