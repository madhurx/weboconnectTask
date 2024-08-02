const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Post = sequelize.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
});

Post.belongsTo(User, { as: 'author', foreignKey: 'userId' });

module.exports = Post;
